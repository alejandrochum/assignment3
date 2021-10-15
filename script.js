let numRows = 0;
let numCols = 0;
let colorSelected; 
let table = document.getElementById('grid'); //assigned a global variable for table

//Add a row
function addR() {
    var row = table.insertRow();
    row.insertCell() //inert new row into table

    //populate the new row with the number of columns existing in the table
    for (let index = 0; index < numCols - 1; index++) {
        row.insertCell()
    }
}
//Add a column
function addC() {
    //First checls of the table is empty. If empty, adds the first row and a column to it
    if(table.rows.length === 0){
        var row = table.insertRow()
        row.insertCell()
    }
    //if not empty, append a new column at the end of each existing row
    else{
        table.querySelectorAll('tr').forEach(row => row.insertCell())
    }
    numCols = table.rows[0].cells.length  //updates the number of columns
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}