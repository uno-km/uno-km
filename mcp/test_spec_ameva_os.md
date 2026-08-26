# AMEVA OS E2E UI Test Specification

이 명세서는 AMEVA OS의 핵심 가상 커널 부팅 상태, 인터랙티브 CLI 터미널 명령어 도움말 실행 결과, 사이드바 스크롤 제어 및 VFS 백업 압축 내려받기 버튼 작동 상태를 종합적으로 검증합니다.

## 테스트 단계 목록
- [ ] **open**: file:///c:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/frontend/ameva_runtime.html
- [ ] **wait-for-text**: #terminalConsole, Boot Sequence complete.
- [ ] **wait-for-text**: #linkStatusText, CONNECTED
- [ ] **screenshot**: step1_booted.png
- [ ] **click**: #terminalInput
- [ ] **type**: #terminalInput, help
- [ ] **wait**: 500
- [ ] **screenshot**: step2_typed_help.png
- [ ] **press**: Enter
- [ ] **wait**: 2500
- [ ] **screenshot**: step3_help_output.png
- [ ] **assert-contains**: #terminalConsole, Commands running natively
- [ ] **scroll**: #sidebarPanel, 400
- [ ] **wait**: 1000
- [ ] **screenshot**: step4_scrolled.png
- [ ] **click**: #btnVfsExport
- [ ] **wait**: 2000
- [ ] **screenshot**: step5_backup_clicked.png
