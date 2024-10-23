const menu = document.querySelector(".menu");
const menuSize = document.querySelector(".menu__range");
const menuReset = document.querySelector(".menu__reset");
const canvas = document.querySelector(".canvas");
const rangeValue = document.querySelector("#rangeValue");
const rangeSize = document.querySelector(".menu__range__size");
const menuRainbow = document.querySelector(".menu__rainbow");
let canvasSize = 16;
let canvasWidth = getComputedStyle(canvas).width;
let canvasSquareSize = (canvasWidth.replace("px","") / canvasSize);
let canvasColor = "#000000"
let menuColor = document.querySelector("#menu__color");
let isSketching = false;

window.onload = makeCanvas();

menuColor.addEventListener("input", function() {
    colorValue.textContent = `${menuColor.value.toUpperCase()}`;
    canvasColor = colorValue.textContent;
})

rangeSize.addEventListener("click", function() {
    rangeValue.textContent = `${rangeSize.value}x${rangeSize.value}`;
    canvasSize = rangeSize.value;
    makeCanvas();
});

menuReset.addEventListener("click", function() {
    makeCanvas();
});

menuRainbow.addEventListener("click", function() {
    colorValue.textContent = "#RAINBOW";
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
        canvasSquare.addEventListener("mousedown", () => isSketching = true);
        canvasSquare.addEventListener("mousemove", makeSketch);
        canvasSquare.addEventListener("mouseup", () => isSketching = false);
        canvas.appendChild(canvasSquare); 
    }
}

function makeSketch(event) {
    if (isSketching){
        if (colorValue.textContent === "#RAINBOW"){
            let rainbowColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = `#${rainbowColor}`;
        }
        else {
            event.target.style.backgroundColor = `${canvasColor}`;
        }
    }
}