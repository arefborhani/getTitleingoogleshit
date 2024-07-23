function getTitle(url) {
    var response = UrlFetchApp.fetch(url);
    var content = response.getContentText();
    var title = content.match(/<title>([^<]*)<\/title>/i)[1];
    return title;
  }
  
  function fetchTitles() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var urls = sheet.getRange('A1:A').getValues();
    
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i][0];
      if (url) {
        try {
          var title = getTitle(url);
          sheet.getRange(i + 1, 2).setValue(title);
        } catch (e) {
          sheet.getRange(i + 1, 2).setValue('Error fetching title');
        }
      }
    }
  }
  
  function getDescription(url) {
    var response = UrlFetchApp.fetch(url);
    var content = response.getContentText();
    var descriptionMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    if (descriptionMatch && descriptionMatch.length > 1) {
      return descriptionMatch[1];
    } else {
      return "No description found";
    }
  }
  
  function fetchDescriptions() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var urls = sheet.getRange('A1:A').getValues();
    
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i][0];
      if (url) {
        try {
          var description = getDescription(url);
          sheet.getRange(i + 1, 3).setValue(description);
        } catch (e) {
          sheet.getRange(i + 1, 3).setValue('Error fetching description');
        }
      }
    }
  }
  