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
let canvasSquareSize = (canvasWidth.replace("px","") / canvasSize);

window.onload = makeCanvas();

rangeSize.addEventListener("click", function() {
    rangeValue.textContent = `${rangeSize.value}x${rangeSize.value}`;
    canvasSize = rangeSize.value;
    makeCanvas();
});

function makeCanvas() {
    canvas.innerHTML = '';
    canvasWidth = getComputedStyle(canvas).width;
    canvasSquareSize = (canvasWidth.replace("px","") / canvasSize);
    for (let y = 0; y < canvasSize * canvasSize; y++){
        const canvasSquare = document.createElement("div");
        canvasSquare.style.boxSizing = "border-box";
        canvasSquare.className = "canvas__square";
        canvasSquare.style.backgroundColor = "white";
        canvasSquare.style.flexBasis = canvasSquareSize + "px"
        canvasSquare.style.width = canvasSquareSize + "px";
        canvasSquare.style.height = canvasSquareSize + "px";
        canvas.appendChild(canvasSquare);
    }
}

menuReset.addEventListener("click", function() {
    canvasSize = 16;
    rangeValue.textContent = `16x16`;
    canvasSquareSize = Math.floor(canvasWidth.replace("px","") / canvasSize);
    makeCanvas();
});