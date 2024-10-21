const menu = document.querySelector(".menu");
const menuColor = document.querySelector(".menu__color");
const menuSize = document.querySelector(".menu__range");
const menuReset = document.querySelector(".menu__reset");
const canvas = document.querySelector(".canvas");
const rangeValue = document.querySelector("#rangeValue");
const rangeSize = document.querySelector(".menu__range__size");
let canvasSize = 16;
let canvasSquare = [];
let canvasRow = [];
let canvasWidth = getComputedStyle(canvas).width;
let canvasSquareSize = Math.floor(canvasWidth.replace("px","") / canvasSize);
makeCanvas()



rangeSize.addEventListener("click", function() {
    rangeValue.textContent = `${rangeSize.value}x${rangeSize.value}`;
    canvasSize = rangeSize.value;
    canvasSquareSize = Math.floor(canvasWidth.replace("px","") / canvasSize);
    makeCanvas();
});

function makeCanvas() {
    while (canvas.hasChildNodes()){
        canvas.removeChild(canvas.firstChild);
    }
    for (let x = 0; x < canvasSize; x++){
        canvasRow[x] = document.createElement("div");
        canvasRow[x].className = "canvas__row";
        canvasRow[x].style.flex = "1";
        canvas.appendChild(canvasRow[x]);
        for (let y = 0; y < canvasSize; y++){
            canvasSquare[y] = document.createElement("div");
            canvasSquare[y].className = "canvas__square";
            canvasSquare[y].style.backgroundColor = "white";
            canvasSquare[y].style.width = canvasSquareSize + "px";
            canvasSquare[y].style.height = canvasSquareSize + "px";
            canvasRow[x].appendChild(canvasSquare[y]);
        }
    }
}

menuReset.addEventListener("click", function() {
    canvasSize = 16;
    canvasSquareSize = Math.floor(canvasWidth.replace("px","") / canvasSize);
    makeCanvas();
});