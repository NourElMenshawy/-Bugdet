//Categories in statment
var MediaElectronics        = 0;
var FoodGroceries           = 0;	
var BarsRestaurants         = 0;	
var Shopping                = 0;
var HouseholdUtilities	    = 0;
var LeisureEntertainment    = 0;
var TransportCar            = 0;
var HealthcareDrugStores    = 0;
var ATM                     = 0;	
var Education               = 0;	
var FamilyFriends           = 0;
var Cash26                  = 0;
var Miscellaneous           = 0;
var Travel                  = 0;
var Salary                  = 0;
var numofdays               = 0; 
var flag                    = 1;
var sum                     = [];
var income                  = [];
var sumValues               = [];
var sumplan                 = [];
var dates                  
var startdate 
//Import CSV file from google drive
function importCSVFromDrive(ss) {
  var fileName = "n26-csv-transactions.csv"
  var files = findFilesInDrive(fileName);
  if(files.length === 0) {
    displayToastAlert("No files with name \"" + fileName + "\" were found in Google Drive.");
    return;
  } else if(files.length > 1) {
    displayToastAlert("Multiple files with name " + fileName +" were found. This program does not support picking the right file yet.");
    return;
  }
  var file = files[0];
  var contents = Utilities.parseCsv(file.getBlob().getDataAsString());
  var sheetName = writeDataToSheet(contents, ss);
  displayToastAlert(contents);
}

//Returns files in Google Drive that have a certain name.
function findFilesInDrive(filename) {
  var files = DriveApp.getFilesByName(filename);
  var result = [];
  while(files.hasNext())
    result.push(files.next());
  return result;
}

//Displays an alert as a Toast message
function displayToastAlert(message) {
  SpreadsheetApp.getActive().toast(message, "⚠️ Alert"); 
}

//Write data to sheet
function writeDataToSheet(data, ss) {
    var newsheet = ss.getSheetByName("statement");
    if (newsheet != null) {
        ss.deleteSheet(newsheet);
    }
  sheet = ss.insertSheet('statement',3);
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  return sheet.getName();
}

//Get numbers of days
function getNumofDays(dates){
  
  var dt2 = new Date(dates)
  var dt1 = new Date(startdate)
  var t1  = dt1.getTime()
  var t2  = dt2.getTime()
  var diffInDays = Math.floor((t2-t1)/(24*3600*1000));
  if(diffInDays > numofdays)
  {
    numofdays = diffInDays
  }
}

//Parse statement sheet to custom categories
function parseStatements(ss){
  var rows = ss.getDataRange().getValues();
  var size = rows.length;
  rows.forEach(function(row,index){
    if(index > 0)
    {
      
      //dates    = getByName("Date",index,ss)
      dates = row[0]
      if(dates != "Date" && flag == 1 )
      {
        startdate = dates
        flag = 0
      }
      getNumofDays(dates)
    
    if(row[5] == "Food & Groceries")
    {
     FoodGroceries = FoodGroceries + (row[6] * -1);
     tempFood      = (row[6] * -1);
     sum.push([dates, tempFood, "food and groceries",  "Food & Groceries"]); 
    }
    if(row[5] == "Media & Electronics")
    {
     MediaElectronics = MediaElectronics + (row[6] * -1);
     tempMedia        = (row[6] * -1);
     sum.push([dates, tempMedia, "Media and electronics",  "Media & Electronics"]); 
    }
    if(row[5] == "Bars & Restaurants")
    {
     BarsRestaurants = BarsRestaurants + (row[6] * -1);
     tempBars        = (row[6] * -1);
     sum.push([dates, tempBars, "Bars & Restaurants",  "Bars & Restaurants"]);  
    }
    if(row[5] == "Shopping")
    {
     Shopping     = Shopping + (row[6] * -1);
     tempShopping = (row[6] * -1);
     sum.push([dates, tempShopping, "Shopping",  "Shopping"]);       
    }
    if(row[5] == "Household & Utilities")
    {
     HouseholdUtilities = HouseholdUtilities + (row[6] * -1);
     tempHouse          = (row[6] * -1);
     sum.push([dates, tempHouse, "Household Utilities",  "Household & Utilities"]);       
    }
    if(row[5] == "Leisure & Entertainment")
    {
     LeisureEntertainment = LeisureEntertainment + (row[6] * -1);
     tempLeisure          = (row[6] * -1);
     sum.push([dates, tempLeisure, "LeisureEntertainment",  "Leisure & Entertainment"]);       
    }
    if(row[5] == "Transport & Car")
    {
     TransportCar     = TransportCar + (row[6] * -1);
     tempTransportCar = (row[6] * -1);
     sum.push([dates, tempTransportCar, "Transport&Car",  "Transport & Car"]);  
    }
    if(row[5] == "Healthcare & Drug Stores")
    {
     HealthcareDrugStores = HealthcareDrugStores + (row[6] * -1);
     tempHealth           = (row[6] * -1);
     sum.push([dates, tempHealth, "Healthcare&Drug Stores",  "Healthcare & Drug Stores"]); 
    }
    if(row[5] == "ATM")
    {
     ATM     = ATM + (row[6] * -1);
     tempATM = (row[6] * -1);
     sum.push([dates, tempATM, "ATM",  "ATM"]); 
    }
    if(row[5] == "Education")
    {
     Education = Education + (row[6] * -1);
     tempEducation = (row[6] * -1);
     sum.push([dates, tempEducation, "Education",  "Education"]); 
    }
    if(row[5] == "Family & Friends")
    {
     FamilyFriends = FamilyFriends + (row[6] * -1);
     tempFamily    = (row[6] * -1);
     sum.push([dates, tempFamily, "Family&Friends",  "Family & Friends"]); 
    }
    if(row[5] == "Miscellaneous")
    {
     Miscellaneous = Miscellaneous + (row[6] * -1);
     tempMisc      = (row[6] * -1);
     sum.push([dates, tempMisc, "Miscellaneous",  "Miscellaneous"]);  
    }
    if(row[5] == "Salary")
    {
     Salary     = Salary + (row[6]);
     tempSalary = (row[6]);
     income.push([dates, tempSalary, "Cerence Salary",  "Salary"]);  
    }
    if(row[5] == "Income")
    {
     Salary     = Salary + (row[6]);
     tempSalary = (row[6]);
     income.push([dates, tempSalary, "N26 Income",  "Income"]);  
    }    
    if(row[5] == "Travel & Holidays")
    {
     Travel     = Travel + (row[6] * -1);
     tempTravel = (row[6] * -1);
     sum.push([dates, tempTravel, "Travel & Holidays",  "Travel & Holidays"]);  
    }    
    } 
   });
  
  //Summation of all categories
  sumValues.push([dates, FoodGroceries,        "Summation of food and groceries",   "Food & Groceries"]);
  sumValues.push([dates, MediaElectronics,     "Summation of MediaElectronics",     "Media & Electronics"]);
  sumValues.push([dates, BarsRestaurants,      "Summation of BarsRestaurants",      "Bars & Restaurants"]);
  sumValues.push([dates, HouseholdUtilities,   "Summation of Household & Utilities","Household & Utilities"]);
  sumValues.push([dates, Shopping,             "Summation of Shopping",             "Shopping"]);
  sumValues.push([dates, LeisureEntertainment, "Summation of Leisure",              "Leisure & Entertainment"]);
  sumValues.push([dates, TransportCar,         "Summation of Transport",            "Transport & Car"]);
  sumValues.push([dates, HealthcareDrugStores, "Summation of Health",               "Healthcare & Drug Stores"]);
  sumValues.push([dates, ATM,                  "Summation of ATM",                  "ATM"]);
  sumValues.push([dates, Education,            "Summation of Education",            "Education"]);
  sumValues.push([dates, FamilyFriends,        "Summation of Family & Friends",     "Family & Friends"]);
  sumValues.push([dates, Miscellaneous,        "Summation of Miscellaneous",        "Miscellaneous"]);
  sumValues.push([dates, Travel,               "Summation of Travel & Holidays",    "Travel & Holidays"]);

}


function getByName(colName, row,ss) {
  var sheet = ss.getSheetByName("statement")
  var data = sheet.getDataRange().getValues();
  var col = data[0].indexOf(colName);
  if (col != -1) {
    return data[row-1][col];
  }
}
              
//Fill transaction sheet
function fillTransaction(ss){
  var sheet1 = ss.getSheetByName("statement")
  var source = ss.getRange("A2:A")
  var sheet = ss.getSheetByName("Transactions")
  var range = sheet.getRange('B5:K')
  var lastrow = range.getLastRow()
  range.clearContent();
  //range.setValues(values);
  //source.copyValuesToRange(sheet, 2, 2, 5, lastrow)
  sheet.getRange(5,2,sum.length,sum[0].length).setValues(sum);
  sheet.getRange(5,7,income.length,income[0].length).setValues(income);

}

//Planned expenses for all catagories per day
function calculatePlanned(ss)
{
  var sheet      = ss.getSheetByName("Summary")
  var range      = sheet.getRange('D28:D')
  numofdays      = numofdays + 1
  planBar        = numofdays * 99999
  planFood       = numofdays * 99999
  planshop       = numofdays * 99999
  planATM        = numofdays * 99999
  planHealth     = numofdays * 99999
  planTransport  = numofdays * 99999
  planHouse      = 99999
  planLeisure    = 99999
  planMedia      = 99999
  planSalary     = 99999
  planMisc       = 99999
  planEdu        = 99999
  planFamily     = 99999
  planCash26     = 99999
  planTravel     = 99999
  
  //Planned expenses per day
  sumplan.push([planMedia])
  sumplan.push([planFood])
  sumplan.push([planBar])
  sumplan.push([planshop])
  sumplan.push([planHouse])
  sumplan.push([planLeisure])
  sumplan.push([planTransport])
  sumplan.push([planHealth])
  sumplan.push([planATM])
  sumplan.push([planEdu])
  sumplan.push([planFamily])
  sumplan.push([planCash26])
  sumplan.push([planMisc])
  sumplan.push([planTravel])
  
  //Planned expenses
  sheet.getRange(28,4,sumplan.length,1).setValues(sumplan);
  
  //Planned Income
  var salary = []
  salary.push([planSalary])
  sheet.getRange(28,10,1,1).setValues(salary);
}


//Notfiy budget by mail
function notifybyemail(ss){
  
  var sheet  = ss.getSheetByName("Summary")
  var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("B25:E41"))
    .setPosition(5, 5, 0, 0)
    .setOption('width', 1400)
    .setOption('height', 900)
    .setOption('hAxis.gridlines.count', 100)
    .setOption('hAxis.gridlines.color','#1E4D6B')
    .build();
  
  var emailAddress =[]
  emailAddress.push(['Nour.el.menshawy@gmail.com'], ['ChangetheEmail@Mensh']);
  var subject = 'Sending emails from a Spreadsheet';
  var blob = chart.getBlob();
  
  
  for(i = 0; i < emailAddress.length; i++)
  {
  MailApp.sendEmail({
    to: emailAddress[i][0], 
    subject: 'Monthly Budget', 
     htmlBody: "Monthly Bugdet",
    attachments: [blob]});
  }
  
}

/*Google Assistant callback function*/
function googleAssitantcallback(ss){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var source = ss.getSheetByName("Summary");
  var destination = ss.getSheetByName("statement");
  var lastrow = destination.getLastRow()
  var range = source.getRange("B21:C22");
  //source.copyValuesToRange(sheet, 2, 2, 5, lastrow)
  range.copyValuesToRange(destination, 1, 2, lastrow+1, lastrow+1);
}

/* Main function*/ 
function main(){
  var ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/14fzRcfq6nkTJDdaTV7tqkKR3-vmYEtI8uDg5-sbON5M/edit?usp=sharing');
  importCSVFromDrive(ss);
  parseStatements(ss);
  fillTransaction(ss);
  calculatePlanned(ss);
  notifybyemail(ss);
  //googleAssitantcallback(ss); //under deveoplement 
  Logger.log(ss.getName());
}
