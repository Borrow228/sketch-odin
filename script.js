const container = document.querySelector("#container");

let gridHeight = 16;
let gridWidth = 16;
let squareWidth = 20;
let squareHeight = 20;
let opacity = 100;


function createGrid(width, height) {
    width = gridWidth;
    height = gridHeight;
for (i = 0; i < (height * width); i ++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.textContent = "";
    square.style.width = 960 / (gridHeight) + "px";
    square.style.height = 960 / (gridHeight) + "px";
    container.appendChild(square);

    
        square.addEventListener("mouseover", function () {
        if (opacity > 0) {opacity -= 1;}
        console.log(opacity);
        function getColor() {
            return Math.floor(Math.random() * 256);
        }
        let color = "rgb(" + getColor() + " " + getColor() + " " + getColor() + " / " + opacity + "%" + ")";
        console.log(color);
        square.style.backgroundColor = color;
    })
}
}

createGrid();

let button = document.querySelector("#button");
button.addEventListener("click", function() {
    let enteredNumber = prompt("Enter the grid size: ");
        while (enteredNumber > 100) {
            enteredNumber = prompt("Not bigger, than 100, please...");
        }
    console.log(enteredNumber);
    gridWidth = enteredNumber;
    gridHeight = enteredNumber;
    container.innerHTML = '';
    createGrid(gridWidth, gridHeight);
})

