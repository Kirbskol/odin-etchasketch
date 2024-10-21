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



rangeSize.addEventListener("click", function() {
    rangeValue.textContent = `${rangeSize.value}x${rangeSize.value}`;
    canvasSize = rangeSize.value;
});

function makeCanvas() {
    for (let x = 0; x < canvasSize; x++){
        canvasRow[x] = document.createElement("div");
        for (let y = 0; y < canvasSize; y++){
            canvasSquare[y] = document.createElement("div");
            canvasSquare[y].style.border = "solid #000000";
            canvasSquare[y].style.borderWidth = "1px";
            canvasSquare[y].style.width = "8px";
            canvasSquare[y].style.height = "8px";
            canvasRow[x].appendChild(canvasSquare[y]);
        }
        canvas.appendChild(canvasRow[x]);
    }
}

menuReset.addEventListener("click", function() {
    makeCanvas();
});
