let numRows = 0;
let numCols = 0;
let colorSelected;
let table = document.getElementById('grid'); //assigned a global variable for table

//Add a row
function addR() {
    var row = table.insertRow(); //inert new row into table
    if (numCols === 0) {
        let cell = row.insertCell();
        numCols = table.rows[0].cells.length;
        cell.setAttribute('onclick', 'colorCell(this)')
    }

    else {
        //populate the new row with the number of columns existing in the table
        for (let index = 0; index < numCols; index++) {
            let cell = row.insertCell()
            cell.setAttribute('onclick', 'colorCell(this)')
        }
        numCols = table.rows[0].cells.length;
    }
}
//Add a column
function addC() {
    //First checls of the table is empty. If empty, adds the first row and a column to it
    if (table.rows.length === 0) {
        let row = table.insertRow();
        let cell = row.insertCell();
        cell.setAttribute('onclick', 'colorCell(this)')
    }
    //if not empty, append a new column at the end of each existing row
    else {
        table.querySelectorAll('tr').forEach(row => {
            let cell = row.insertCell();
            cell.setAttribute('onclick', 'colorCell(this)')
        })
    }
    numCols = table.rows[0].cells.length  //updates the number of columns
}

//Remove a row
function removeR() {
    table.deleteRow(-1); //removes last row

    //if the last row is deleted, resets the numCol variable to 0
    if (table.rows.length === 0) {
        numCols = 0;
    }
}
//Remove a column
function removeC() {
    if (numCols > 0) {
        //loops thru the table deleting the last column of each row
        table.querySelectorAll('tr').forEach(row => row.deleteCell(-1))
        numCols = table.rows[0].cells.length // updates the number of columns variable
    }

    //if the number of columns is 0, removes all childs of the table, making sure there are no empty rows in the table
    if (numCols === 0) {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
    }
}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

//color cell on click
function colorCell(elmnt){
    elmnt.style.backgroundColor= colorSelected;
}

function fill() {

}

function clearAll() {
    alert("Clicked Clear All")
}

function fillU() {
    alert("Clicked Fill All Uncolored")
}