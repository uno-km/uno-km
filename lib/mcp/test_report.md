# Browser Test Verification Report

* **실행 시각**: 2026-08-24 06:36:44 (Local System Time)
* **대상 테스트 명세서**: [test_spec_ameva_os.md](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/test_spec_ameva_os.md)
* **검증 결과**: ✅ **통과 (PASSED)**
* **실행 시간**: 14.9s

## 📊 요약
* **전체 단계**: 18
* **성공**: 18
* **실패**: 0

## 📝 세부 실행 로그

### 1. ✅ **open**
* **인자**: `file:///c:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/frontend/ameva_runtime.html`
* **상태**: **PASSED**
---

### 2. ✅ **wait-for-text**
* **인자**: `#terminalConsole, Boot Sequence complete.`
* **상태**: **PASSED**
---

### 3. ✅ **wait-for-text**
* **인자**: `#linkStatusText, CONNECTED`
* **상태**: **PASSED**
---

### 4. ✅ **screenshot**
* **인자**: `step1_booted.png`
* **상태**: **PASSED**
* **스크린샷**: [step1_booted.png](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step1_booted.png)

![Screenshot 4](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step1_booted.png)

---

### 5. ✅ **click**
* **인자**: `#terminalInput`
* **상태**: **PASSED**
---

### 6. ✅ **type**
* **인자**: `#terminalInput, help`
* **상태**: **PASSED**
---

### 7. ✅ **wait**
* **인자**: `500`
* **상태**: **PASSED**
---

### 8. ✅ **screenshot**
* **인자**: `step2_typed_help.png`
* **상태**: **PASSED**
* **스크린샷**: [step2_typed_help.png](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step2_typed_help.png)

![Screenshot 8](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step2_typed_help.png)

---

### 9. ✅ **press**
* **인자**: `Enter`
* **상태**: **PASSED**
---

### 10. ✅ **wait**
* **인자**: `2500`
* **상태**: **PASSED**
---

### 11. ✅ **screenshot**
* **인자**: `step3_help_output.png`
* **상태**: **PASSED**
* **스크린샷**: [step3_help_output.png](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step3_help_output.png)

![Screenshot 11](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step3_help_output.png)

---

### 12. ✅ **assert-contains**
* **인자**: `#terminalConsole, Commands running natively`
* **상태**: **PASSED**
---

### 13. ✅ **scroll**
* **인자**: `#sidebarPanel, 400`
* **상태**: **PASSED**
---

### 14. ✅ **wait**
* **인자**: `1000`
* **상태**: **PASSED**
---

### 15. ✅ **screenshot**
* **인자**: `step4_scrolled.png`
* **상태**: **PASSED**
* **스크린샷**: [step4_scrolled.png](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step4_scrolled.png)

![Screenshot 15](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step4_scrolled.png)

---

### 16. ✅ **click**
* **인자**: `#btnVfsExport`
* **상태**: **PASSED**
---

### 17. ✅ **wait**
* **인자**: `2000`
* **상태**: **PASSED**
---

### 18. ✅ **screenshot**
* **인자**: `step5_backup_clicked.png`
* **상태**: **PASSED**
* **스크린샷**: [step5_backup_clicked.png](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step5_backup_clicked.png)

![Screenshot 18](file:///C:/Users/GAME/Desktop/uno-km/dev/AMEVA-MCP-Hub/docs/step5_backup_clicked.png)

---

