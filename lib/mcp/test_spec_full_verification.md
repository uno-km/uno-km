# AMEVA OS Full MCP Verification Test Specification

이 명세서는 AMEVA OS의 7가지 MCP 도구와 핵심 UI 기능 전체를 순서대로 실제 브라우저에서 검증합니다.
각 단계마다 스크린샷을 찍어 물증으로 남깁니다.

## 시나리오 A: 부팅 및 기본 UI 상태 확인

- [ ] **open**: file:///c:/Users/GAME/Desktop/uno-km/dev/MCP-Wasm-Toolkit/frontend/ameva_runtime.html
- [ ] **wait-for-text**: #terminalConsole, Boot Sequence complete.
- [ ] **screenshot**: A1_booted.png
- [ ] **assert-exists**: #terminalInput
- [ ] **assert-exists**: #sidebarPanel
- [ ] **assert-exists**: #terminalConsole
- [ ] **assert-exists**: #btnVfsExport
- [ ] **assert-exists**: #btnVfsImport
- [ ] **assert-contains**: #terminalConsole, WASM C-Kernel initialized
- [ ] **screenshot**: A2_ui_elements_verified.png

## 시나리오 B: 터미널 기본 명령어 실행 검증 (ls, pwd, help)

- [ ] **click**: #terminalInput
- [ ] **type**: #terminalInput, ls
- [ ] **press**: Enter
- [ ] **wait**: 1200
- [ ] **screenshot**: B1_ls_output.png
- [ ] **assert-contains**: #terminalConsole, total
- [ ] **type**: #terminalInput, pwd
- [ ] **press**: Enter
- [ ] **wait**: 800
- [ ] **screenshot**: B2_pwd_output.png
- [ ] **assert-contains**: #terminalConsole, /vfs
- [ ] **type**: #terminalInput, help
- [ ] **press**: Enter
- [ ] **wait**: 1200
- [ ] **screenshot**: B3_help_output.png
- [ ] **assert-contains**: #terminalConsole, Commands running natively

## 시나리오 C: VFS 파일 조작 검증 (echo, cat, mkdir)

- [ ] **type**: #terminalInput, echo hello world > home/test_verify.txt
- [ ] **press**: Enter
- [ ] **wait**: 800
- [ ] **type**: #terminalInput, cat home/test_verify.txt
- [ ] **press**: Enter
- [ ] **wait**: 800
- [ ] **screenshot**: C1_echo_cat.png
- [ ] **assert-contains**: #terminalConsole, hello world
- [ ] **type**: #terminalInput, mkdir home/testdir
- [ ] **press**: Enter
- [ ] **wait**: 800
- [ ] **type**: #terminalInput, ls home
- [ ] **press**: Enter
- [ ] **wait**: 800
- [ ] **screenshot**: C2_mkdir_ls.png

## 시나리오 D: VFS Backup/Restore 버튼 UI 검증

- [ ] **scroll**: #sidebarPanel, 300
- [ ] **wait**: 600
- [ ] **assert-exists**: #btnVfsExport
- [ ] **screenshot**: D1_sidebar_scrolled.png
- [ ] **click**: #btnVfsExport
- [ ] **wait**: 2500
- [ ] **screenshot**: D2_backup_triggered.png
- [ ] **assert-contains**: #terminalConsole, zip

## 시나리오 E: Activity Bar 토글 검증

- [ ] **click**: #btnToggleExplorer
- [ ] **wait**: 500
- [ ] **screenshot**: E1_sidebar_collapsed.png
- [ ] **click**: #btnToggleExplorer
- [ ] **wait**: 500
- [ ] **screenshot**: E2_sidebar_expanded.png

## 시나리오 F: uname 시스템 정보 출력 검증

- [ ] **click**: #terminalInput
- [ ] **type**: #terminalInput, uname -a
- [ ] **press**: Enter
- [ ] **wait**: 1000
- [ ] **screenshot**: F1_uname.png
- [ ] **assert-contains**: #terminalConsole, AMEVA

## 시나리오 G: 최종 종합 상태 캡처

- [ ] **screenshot**: G1_final_state.png
