var finger;
var centerX;
var centerY;
var prevAngle = 0;
var prevX = 0;
var prevY = 0;
var lerpyBoiPos = 0.2;
var lerpyBoiAngle = .25;

var fingerOffset = 30;  //half of finger height

// HELPER
Math.degrees = function(radians) {
	return radians * 180 / Math.PI;
}

// HELPER
function lerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    console.log(value1 + (value2 - value1) * amount)
    return value1 + (value2 - value1) * amount;
};

function handleMouseMove(e){
    var newX = lerp(prevX,e.clientX,lerpyBoiPos);
    var newY = lerp(prevY,e.clientY,lerpyBoiPos)
    finger.style.left = newX + "px";
    finger.style.top = newY - fingerOffset + "px";
    prevX = newX;
    prevY = newY;

    var angle = Math.degrees(Math.atan2((e.clientY - centerY),(e.clientX - centerX)));
    var lerped = lerp(prevAngle,angle,lerpyBoiAngle);
    finger.style.transform = "rotate("+angle+"deg)";
    prevAngle = lerped;
    console.log(angle);
}

window.onload = function(){
    finger = new Image();
    finger.src = "finger/finger.svg";
    finger.classList.add("finger");
    document.body.appendChild(finger);

    centerX = window.innerWidth/2;
    centerY = window.innerHeight/2;

    document.onmousemove = handleMouseMove;
}