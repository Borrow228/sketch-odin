const container = document.querySelector("#container");

let height = 16;
let width = 16;

container.style.maxWidth = width * 42 + "px";

for (i = 0; i < (height * width); i ++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.textContent = "";
    container.appendChild(square);
}

