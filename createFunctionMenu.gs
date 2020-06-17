/** 
* 
* Create a menu option for script functions. Either run this function of reload your spreadsheet to use.
*
* References
* https://developers.google.com/apps-script/reference/document/document-app#getui
*/

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Functions')
  .addItem('Add Function Description Here', 'functionName')
  .addToUi();
}

/**
*
* This is an alternative method of creating menu options for our GAS functions. Commented out for now.
*
*/

//function onOpen() {
//  var spreadsheet = SpreadsheetApp.getActive();
//  var menuItems = [
//    {name: 'Add Function 1 Here', functionName: 'functionOne'},
//    {name: 'Add Function 2 Here', functionName: 'functionOne'},
//  ];
//    spreadsheet.addMenu('Access your Functions Here', menuItems);
//    }


/**
*
* This is our function.
*
*/
function functionName(){
  
  //  Add code here
  SpreadsheetApp.getUi().alert("Hello World!");
}
