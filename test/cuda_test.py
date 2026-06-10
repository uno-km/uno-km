import torch
import torch.nn as nn
import torch.optim as optim
import time
import sys

def run_cuda_test():
    print("=" * 60)
    print("🎨 [1] 시스템 및 CUDA 환경 확인")
    print("=" * 60)
    
    print(f"• PyTorch 버전: {torch.__version__}")
    cuda_available = torch.cuda.is_available()
    print(f"• CUDA 인식 여부: {cuda_available}")
    
    # ❌ [CASE 500] CUDA 인식 자체가 안 되는 경우
    if not cuda_available:
        print("\n❌ 에러: CUDA를 사용할 수 없습니다. 드라이버나 PyTorch 버전을 확인하세요.")
        return 500, "CUDA_NOT_AVAILABLE"

    device_id = torch.cuda.current_device()
    gpu_name = torch.cuda.get_device_name(device_id)
    compute_cap = torch.cuda.get_device_capability(device_id)
    vram_total = torch.cuda.get_device_properties(device_id).total_memory / (1024**3)
    
    print(f"• 인식된 GPU: {gpu_name} (ID: {device_id})")
    print(f"• 컴퓨팅 능력 (Compute Capability): {compute_cap[0]}.{compute_cap[1]}")
    print(f"• 총 VRAM 용량: {vram_total:.2f} GB")
    
    print("\n" + "=" * 60)
    print("⚡ [2] 행렬 연산 속도 비교 (CPU vs GPU)")
    print("=" * 60)
    
    matrix_size = 5000
    
    # CPU 연산 측정
    start_time = time.time()
    x_cpu = torch.randn(matrix_size, matrix_size)
    y_cpu = torch.randn(matrix_size, matrix_size)
    z_cpu = torch.matmul(x_cpu, y_cpu)
    cpu_duration = time.time() - start_time
    print(f"• CPU 행렬 곱 연산 시간: {cpu_duration:.4f}초")
    
    # GPU (CUDA) 연산 측정
    device = torch.device("cuda")
    start_time = time.time()
    x_gpu = torch.randn(matrix_size, matrix_size, device=device)
    y_gpu = torch.randn(matrix_size, matrix_size, device=device)
    z_gpu = torch.matmul(x_gpu, y_gpu)
    torch.cuda.synchronize()
    gpu_duration = time.time() - start_time
    print(f"• GPU 행렬 곱 연산 시간: {gpu_duration:.4f}초")
    print(f"🚀 GPU가 CPU보다 약 {cpu_duration / gpu_duration:.1f}배 빠릅니다!")

    print("\n" + "=" * 60)
    print("🏋️ [3] 1070 Ti 맞춤형 FP16 혼합 정밀도 학습 테스트 (VRAM 최적화)")
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
    scaler = torch.amp.GradScaler('cuda')
    
    inputs = torch.randn(128, 2000, device=device)
    targets = torch.randn(128, 10, device=device)
    
    try:
        for epoch in range(1, 6):
            optimizer.zero_grad()
            with torch.amp.autocast('cuda'):
                outputs = model(inputs)
                loss = criterion(outputs, targets)
            
            scaler.scale(loss).backward()
            scaler.step(optimizer)
            scaler.update()
            print(f"• Epoch [{epoch}/5] - Loss: {loss.item():.4f} (FP16 연산 정상)")
            
        print("\n🎉 축하합니다! 1070 Ti 맞춤형 최적화 학습까지 완벽하게 동작합니다.")
        
        # 🟢 [CASE 200] 모든 테스트 통과 시
        return 200, "SUCCESS"
        
    except Exception as e:
        # ❌ [CASE 500] 런타임 학습 에러(OOM 등) 발생 시
        print(f"\n❌ 학습 중 에러 발생: {e}")
        return 500, str(e)
        
    finally:
        torch.cuda.empty_cache()
        allocated_vram = torch.cuda.memory_allocated(device) / (1024**2)
        print(f"• 가속 종료 후 잔여 VRAM: {allocated_vram:.2f} MB (캐시 정리 완료)")
        print("=" * 60)

if __name__ == "__main__":
    # 함수 실행 후 리턴코드와 메시지 수신
    status_code, message = run_cuda_test()
    
    print(f"\n[최종 리턴 결과] Status Code: {status_code} | Message: {message}")
    
    # 💡 프로세스 종료 코드(Exit Code)로 상태를 내보냄
    # 200이면 정상 종료(0), 500이면 에러 종료(1)로 쉘에서 캐치 가능하게 매핑
    if status_code == 200:
        sys.exit(0)
    else:
        sys.exit(1)