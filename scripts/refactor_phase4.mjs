import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetPath = path.join(__dirname, '../api/seed_posts.js');

let content = fs.readFileSync(targetPath, 'utf8');
const originalLength = content.length;

const phase4Rules = [
  // 1. 남아있던 '증명하였습니다', '밝혀내', '압도적'
  [
    /\\min\(T_\\text\{cpu\}, T_\\text\{gpu\}\}\)\$을 증명하였습니다/g,
    '\\min(T_\\text{cpu}, T_\\text{gpu})$의 수렴 타당성을 실측 벤치마크를 통해 체계적으로 입증하였습니다'
  ],
  [
    /\\min\(T_\{cpu\}, T_\{gpu\}\}\)\$을 증명하였습니다/g,
    '\\min(T_{cpu}, T_{gpu})$의 수렴 타당성을 실측 벤치마크를 통해 체계적으로 입증하였습니다'
  ],
  [
    /마이크로초\(\$\\mu\\text\{s\}\$\) 단위로 압도적으로 빠릅니다/g,
    '마이크로초($\\mu\\text{s}$) 단위로 신속하게 완료됩니다'
  ],
  [
    /실측 데이터를 통해 체계적으로 밝혀내고/g,
    '실측 데이터를 통해 체계적으로 분석하고'
  ],

  // 2. 100% Rust 언어 -> 전면 Rust 언어
  [
    /100% Rust 언어로 재작성되었으며/g,
    '전면 Rust 언어로 재작성되었으며'
  ],

  // 3. '완전히' 잔여 24건 정밀 문맥 정돈
  [
    /디스플레이 컨트롤러 전원을 완전히 끄고/g,
    '디스플레이 컨트롤러 전원을 차단하고'
  ],
  [
    /메모리가 완전히 고갈될 때까지 기다리다가/g,
    '메모리가 한계치까지 고갈될 때까지 기다리다가'
  ],
  [
    /방식에서 완전히 대척점에 있습니다/g,
    '방식에서 뚜렷한 아키텍처적 대비를 이룹니다'
  ],
  [
    /제어권을 완전히 넘깁니다/g,
    '제어권을 정식으로 이양합니다'
  ],
  [
    /바인더 직렬화 보일러플레이트를 완전히 은닉함/g,
    '바인더 직렬화 보일러플레이트를 프레임워크 레벨에서 캡슐화함'
  ],
  [
    /스마트폰 화면이 수 초간 완전히 멈춥니다/g,
    '스마트폰 화면이 수 초간 정체(Freeze)됩니다'
  ],
  [
    /메모리가 완전히 고갈되기 훨씬 전에/g,
    '메모리가 임계 한계에 도달하기 전에'
  ],
  [
    /엔진의 결합으로 완전히 진화했습니다/g,
    '엔진의 결합으로 정밀한 제어 아키텍처로 진화했습니다'
  ],
  [
    /메모리 회수를 기다리느라 완전히 멈춰버린 치명적 정체 시간/g,
    '메모리 회수를 기다리느라 정체된 시간(Stall time)'
  ],
  [
    /물리 메모리와 스왑 공간이 완전히 고갈된 절망적인 순간에만/g,
    '물리 메모리와 스왑 공간이 임계치까지 소진된 시점에만'
  ],
  [
    /기회조차 완전히 박탈하고 지체 없이 프로세스를 종료하는/g,
    '여지없이 즉각 프로세스를 종료하는'
  ],
  [
    /사용자가 앱을 완전히 닫았더라도/g,
    '사용자가 앱을 화면에서 닫았더라도'
  ],
  [
    /클래스 로딩을 완전히 건너뛰는/g,
    '클래스 로딩 과정을 생략하는'
  ],
  [
    /메모리의 수명\(P\/E Cycle\)이 완전히 보존됩니다/g,
    '메모리의 수명(P/E Cycle)을 효과적으로 보존합니다'
  ],
  [
    /파편화된 ION을 완전히 퇴출하고/g,
    '파편화된 ION을 폐지하고'
  ],
  [
    /물리적으로 완전히 연속된 거대한 물리 메모리 블록/g,
    '물리적으로 연속된(Contiguous) 메모리 블록'
  ],
  [
    /두꺼운 방화벽으로 완전히 격리하고/g,
    '경계 방화벽으로 안전하게 격리하고'
  ],
  [
    /HIDL을 완전히 대체하기 위해 도입된/g,
    'HIDL을 승계 및 대체하기 위해 도입된'
  ],
  [
    /인터넷 통신망\(표준 binder\)과 완전히 분리된/g,
    '인터넷 통신망(표준 binder)과 분리된'
  ],
  [
    /모바일 런타임의 패러다임을 완전히 전환시켰습니다/g,
    '모바일 런타임의 아키텍처 패러다임을 혁신적으로 전환시켰습니다'
  ],
  [
    /Dalvik 가상머신을 완전히 퇴출하고/g,
    'Dalvik 가상머신을 공식 대체하고'
  ],
  [
    /바이트코드 검증 과정을 완전히 생략\(Skip\)할 수 있도록/g,
    '바이트코드 검증 과정을 생략(Skip)할 수 있도록'
  ],
  [
    /가상 Linux 사용자\"로 완전히 재해석하여/g,
    '가상 Linux 사용자"로 재정의하여'
  ],

  // 4. '반드시' 잔여 건 정돈
  [
    /NDK\/C\+\+ 공유 라이브러리가 반드시 16KB 경계/g,
    'NDK/C++ 공유 라이브러리가 16KB 경계'
  ],
  [
    /실습 종료 후 반드시 부하 프로세스를 종료합니다/g,
    '실습 종료 후 부하 프로세스를 반드시 정리합니다'
  ],
  [
    /\(이 경우 반드시 Ashmem\/DMA-BUF나/g,
    '(이 경우 Ashmem/DMA-BUF나'
  ],

  // 5. 남아있을 수 있는 단편 어휘 점검
  [
    /\\min\(T_\\text\{cpu\}, T_\\text\{gpu\}\}\)\$을 증명/g,
    '\\min(T_\\text{cpu}, T_\\text{gpu})$의 수렴성을 실측 벤치마크로 검증'
  ],
  [
    /증명하였습니다/g,
    '체계적으로 검증하였습니다'
  ]
];

let applied = 0;
phase4Rules.forEach(([pattern, replacement]) => {
  const matches = content.match(pattern);
  if (matches) {
    applied += matches.length;
    content = content.replace(pattern, replacement);
  }
});

fs.writeFileSync(targetPath, content, 'utf8');

console.log(`Phase 4 Complete: Applied ${applied} substitutions across ${phase4Rules.length} rules.`);
console.log(`File size: ${originalLength} -> ${content.length} bytes`);
