
function sendEmails() {
  //initial stuff
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var sheet = SpreadsheetApp.getActiveSheet();

  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow() - 1;   // Number of rows to process
  
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 2)
  
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
    
  //goes through each row
  for (i in data) {
    
    var row = data[i];
    
    //fetches id number
    var x = "A" + startRow;
    var data1 = SpreadsheetApp.getActiveSpreadsheet().getRange(x).getValue();
    var emailAddress = data1 + "@students.sd308.org";  // First column
        
    //fetches period
    var y = "B" + startRow;
    var data2 = SpreadsheetApp.getActiveSpreadsheet().getRange(y).getValue();
    var period =data2;// Second column
    
    //makes and sends email
    var subject = "Where were you during hour " + period + "?";
    
    var message = "Please respond to this email at your earliest convience with where or with whom you were with during hour:" +period;
    
    MailApp.sendEmail(emailAddress, subject, message);
    
    startRow += 1;
  }
}

