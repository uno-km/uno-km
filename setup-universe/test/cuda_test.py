import torch
import torch.nn as nn
import torch.optim as optim
import time
import sys

def run_cuda_test():
    print("=" * 60)
    print("[1] System and CUDA Environment Verification")
    print("=" * 60)
    
    print(f"  PyTorch Version: {torch.__version__}")
    cuda_available = torch.cuda.is_available()
    print(f"  CUDA Available: {cuda_available}")
    
    # [CASE 500] CUDA 인식 자체가 안 되는 경우
    if not cuda_available:
        print("\n  Error: CUDA is not available. Please check your GPU drivers or PyTorch installation.")
        return 500, "CUDA_NOT_AVAILABLE"

    device_id = torch.cuda.current_device()
    gpu_name = torch.cuda.get_device_name(device_id)
    compute_cap = torch.cuda.get_device_capability(device_id)
    vram_total = torch.cuda.get_device_properties(device_id).total_memory / (1024**3)
    
    print(f"  Detected GPU: {gpu_name} (ID: {device_id})")
    print(f"  Compute Capability: {compute_cap[0]}.{compute_cap[1]}")
    print(f"  Total VRAM Capacity: {vram_total:.2f} GB")
    
    print("\n" + "=" * 60)
    print("[2] Matrix Multiplication Speed Comparison (CPU vs GPU)")
    print("=" * 60)
    
    matrix_size = 5000
    
    # CPU 연산 측정
    start_time = time.time()
    x_cpu = torch.randn(matrix_size, matrix_size)
    y_cpu = torch.randn(matrix_size, matrix_size)
    z_cpu = torch.matmul(x_cpu, y_cpu)
    cpu_duration = time.time() - start_time
    print(f"  CPU Execution Time: {cpu_duration:.4f} seconds")
    
    # GPU (CUDA) 연산 측정
    device = torch.device("cuda")
    start_time = time.time()
    x_gpu = torch.randn(matrix_size, matrix_size, device=device)
    y_gpu = torch.randn(matrix_size, matrix_size, device=device)
    z_gpu = torch.matmul(x_gpu, y_gpu)
    torch.cuda.synchronize()
    gpu_duration = time.time() - start_time
    print(f"  GPU Execution Time: {gpu_duration:.4f} seconds")
    print(f"  GPU is approximately {cpu_duration / gpu_duration:.1f}x faster than CPU!")

    print("\n" + "=" * 60)
    print("[3] 1070 Ti Optimized FP16 Mixed Precision Training Test")
    print("=" * 60)
    
    model = nn.Sequential(
        nn.Linear(2000, 4096),
        nn.ReLU(),
        nn.Linear(4096, 2048),
        nn.ReLU(),
        nn.Linear(2048, 10)
    ).to(device)
    
    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=0.01)
    
    # 💡 버그 수정 포인트: PyTorch 2.x 대응을 위해 인자 선언 방식을 위치 인자로 변경 ('cuda'가 기본값임)
    scaler = torch.amp.GradScaler('cuda')
    
    inputs = torch.randn(128, 2000, device=device)
    targets = torch.randn(128, 10, device=device)
    
    try:
        for epoch in range(1, 6):
            optimizer.zero_grad()
            with torch.amp.autocast(device_type='cuda'):
                outputs = model(inputs)
                loss = criterion(outputs, targets)
            
            scaler.scale(loss).backward()
            scaler.step(optimizer)
            scaler.update()
            print(f"  Epoch [{epoch}/5] - Loss: {loss.item():.4f} (FP16 Operation OK)")
            
        print("\n  Success: 1070 Ti custom optimized training works perfectly.")
        
        # [CASE 200] 모든 테스트 통과 시
        return 200, "SUCCESS"
        
    except Exception as e:
        # [CASE 500] 런타임 학습 에러(OOM 등) 발생 시
        print(f"\n  Error occurred during training: {e}")
        return 500, str(e)
        
    finally:
        torch.cuda.empty_cache()
        allocated_vram = torch.cuda.memory_allocated(device) / (1024**2)
        print(f"  Residual VRAM after execution: {allocated_vram:.2f} MB (Cache cleared)")
        print("=" * 60)

if __name__ == "__main__":
    # 함수 실행 후 리턴코드와 메시지 수신
    status_code, message = run_cuda_test()
    
    print(f"\n[Final Result] Status Code: {status_code} | Message: {message}")
    
    # 프로세스 종료 코드(Exit Code)로 상태를 내보냄
    if status_code == 200:
        sys.exit(0)
    else:
        sys.exit(1)