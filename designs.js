// Author : Susanta K Routray - sr005u
// File name : designs.js
//  Date : 10-25-2020 

const myPixelCanvas = document.getElementById('pixelCanvas');
const mySizePicker = document.getElementById('sizePicker');
var inputs = mySizePicker.elements;

// When size is submitted by the user, call makeGrid()
//Entering whole numbers in the "Height" and "Width" fields, and submitting the form, causes an empty grid to appear on the page.
// The user can create a canvas of any (reasonable) size. 
// Reasonable size of 20 has been considered here, if user types in any range outside 1 - 20, then a warning msg will apear to correct the number
for (i = 0; i < inputs.length; i++) {
    // Select size input: Limited the max number to select 20 for both
    if (inputs[i].nodeName === "INPUT"){
        if (inputs[i].type === "number") {
            inputs[i].max = 20;
        } else {
            mySizePicker.addEventListener('submit', function(e) {
                e.preventDefault();
                makeGrid(); // _N_ by _M_ grid with the makeGrid()
            });
        }
    } 
}

function makeGrid() {
// Your code goes here!
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;
    
    //If there are already colored squares in the grid, clicking the Submit button clears them out.
    while (myPixelCanvas.firstChild) {
        myPixelCanvas.removeChild(myPixelCanvas.firstChild);
    }
    // Creates rows and cells
    for (let i = 1; i <= gridHeight; i++) {
        let gridRow = document.createElement('tr'); // _N_
        myPixelCanvas.appendChild(gridRow);
        for (let j = 1; j <= gridWidth; j++) {
            let gridCell = document.createElement('td'); // _M_
            gridRow.appendChild(gridCell); // created A GRID of gridHeight * gridWidth
            // Choosing a color from the color selector and clicking on a grid square causes that grid square (and only that square) to change color
            // Fills in cell with selected color upon mouse press ('mousedown', unlike 'click', doesn't also require release of mouse button)
            gridCell.addEventListener('mousedown', function() { // Event listeners are properly added to the grid squares
                const color = document.getElementById('colorPicker').value; //Choosing a color from the color selector on the fly
                //Event listeners are properly added to the grid squares (and not to the border or the table itself): "this"
                // if a grid is clicked first-time, it will be colored with choosen color else it will clear out the color
                this.style.backgroundColor = this.style.backgroundColor ? null : color;
            })
        }
    }
}