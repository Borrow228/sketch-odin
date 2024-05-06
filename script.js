const container = document.querySelector("#container");

let height = 16;
let width = 16;
let squareWidth = 40;
let squareHeight = 40;
container.style.maxWidth = width * (squareWidth + 2) + "px";

for (i = 0; i < (height * width); i ++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.textContent = "";
    square.style.width = squareWidth + "px";
    square.style.height = squareHeight + "px";
    container.appendChild(square);

    square.addEventListener("mouseover", function () {
        square.style.backgroundColor = "white";
    })
}



