/**
 * Google Apps Script for AMEVA Guestbook
 * 
 * [설치 방법]
 * 1. 공유해주신 구글 스프레드시트(https://docs.google.com/spreadsheets/d/1LMFt9sGWeW-RPlzWfhZaQimiL_p_Gleenh6lZwuYwj4/edit)를 엽니다.
 * 2. 상단 메뉴에서 [확장 프로그램] -> [Apps Script]를 클릭합니다.
 * 3. 기존 코드를 모두 지우고 이 파일의 내용을 붙여넣습니다.
 * 4. 상단 메뉴에서 [배포] -> [새 배포]를 클릭합니다.
 * 5. 유형 선택: "웹 앱" (톱니바퀴 아이콘 클릭 후 선택)
 * 6. 설명: "AMEVA Guestbook"
 * 7. 실행할 사용자: "나"
 * 8. 액세스할 수 있는 사용자: "모든 사용자" (매우 중요)
 * 9. [배포] 버튼 클릭 후, 권한 검토를 허용합니다.
 * 10. 제공된 "웹 앱 URL"을 복사하여, `social_engine.js`의 `GAS_URL` 변수에 붙여넣습니다.
 */

function doPost(e) {
  try {
    var SECRET_KEY = "ameva-secure-fabric-key-2026";
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var data = JSON.parse(e.postData.contents);
    
    if (data.key !== SECRET_KEY) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    if (data.type === 'visit') {
      var visitsSheet = activeSpreadsheet.getSheetByName("Visits");
      if (!visitsSheet) {
        visitsSheet = activeSpreadsheet.insertSheet("Visits");
        visitsSheet.appendRow(["Timestamp", "Type"]); // Header
      }
      visitsSheet.appendRow([new Date(), "visit"]);
      
      return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      var guestbookSheet = activeSpreadsheet.getSheetByName("Guestbook") || activeSpreadsheet.getSheets()[0];
      // 타임스탬프, 이름, 메시지, 토픽
      var rowData = [
        new Date(), 
        data.name || "Anonymous", 
        data.message || "", 
        data.topic || ""
      ];
      guestbookSheet.appendRow(rowData);
      
      return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var SECRET_KEY = "ameva-secure-fabric-key-2026";
    var requestKey = e.parameter.key;
    
    if (requestKey !== SECRET_KEY) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Unauthorized" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var guestbookSheet = activeSpreadsheet.getSheetByName("Guestbook") || activeSpreadsheet.getSheets()[0];
    var visitsSheet = activeSpreadsheet.getSheetByName("Visits");
    
    var gbData = guestbookSheet.getDataRange().getValues();
    var visitors = gbData.length > 1 ? gbData.slice(1) : [];
    
    var totalVisitsCount = 0;
    if (visitsSheet) {
      var visitsData = visitsSheet.getDataRange().getValues();
      totalVisitsCount = Math.max(0, visitsData.length - 1);
    } else {
      totalVisitsCount = visitors.length; // Fallback
    }
    
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "total_visitors": totalVisitsCount,
      "recent": visitors.slice(-5) // 최근 5개만
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
