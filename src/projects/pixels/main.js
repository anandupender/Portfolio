var screenWidth;
var screenHeight;
var canvas = document.querySelector("#canvas");

var boxSize = 20;
var totalBoxes;
var myBackgroundColor = [0,0,0];

var deleteDelay = 3000;
var deleteToggle = true;

window.addEventListener("load", init);
var isTouchDevice = 'ontouchstart' in document.documentElement;

function init(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    totalBoxes = screenWidth * screenHeight / (boxSize*boxSize);
    console.log(totalBoxes);
    fillScreen();
}

function fillScreen(){
    canvas.innerHTML = '';
    for(var i = 0; i < totalBoxes; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = boxSize+"px";
        pixel.style.height = boxSize+"px";
        if(isTouchDevice){
            pixel.ontouchstart = mouseOver;
            if(deleteToggle){
                pixel.ontouchend = mouseLeave;
            }
        }else{
            pixel.onmouseover = mouseOver;
            if(deleteToggle){
                pixel.onmouseleave = mouseLeave;
            }
        }
        canvas.appendChild(pixel);
    }
}

function mouseOver(){
    this.style.backgroundColor = rgbToHex(myBackgroundColor);
}

function mouseLeave(){
    window.setTimeout(function(el){
        el.style.backgroundColor = "white";
    },deleteDelay,this);
}

function rgbToHex(array) {
    return "#" + ((1 << 24) + (array[0] << 16) + (array[1] << 8) + array[2]).toString(16).slice(1);
  }

var obj = {
    boxSize: 20,
    deleteToggle: true,
    deleteDelay:1000,
    myBackgroundColor:[0,0,0]
};

// Debounce
var canChangeBoxSize = true;
var debounceSpeed = 400;

var gui = new dat.gui.GUI();
gui.remember(obj);
gui.add(obj, 'boxSize').min(5).max(150).step(1).onChange(function(newValue) {
    boxSize = newValue;
    if(canChangeBoxSize){
        init();
        canChangeBoxSize = false;
        window.setTimeout(function(){
            canChangeBoxSize = true;
            init();
        },debounceSpeed)
    }
});

gui.add(obj, 'deleteToggle').onChange(function(newValue) {
    deleteToggle = newValue;
    init();
});

gui.add(obj, 'deleteDelay').min(0).max(3000).step(10).onChange(function(newValue) {
    deleteDelay = newValue;
});


gui.addColor(obj, 'myBackgroundColor').onChange(function(newValue) {
    myBackgroundColor = newValue;
});
