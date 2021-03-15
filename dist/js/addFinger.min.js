let centerX = window.innerWidth/2;
let centerY = window.innerHeight/2;
var prevAngle = 0;
var prevX = 0;
var prevY = 0;
var lerpyBoiPos = 0.55;
var lerpyBoiAngle = .25;

var fingerOffset = 40;  //half of finger height

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

function handleMouseMoveFinger(e){
    var newX = lerp(prevX,e.clientX,lerpyBoiPos);
    var newY = lerp(prevY,e.clientY,lerpyBoiPos)
    document.querySelector("#finger").style.left = newX + "px";
    document.querySelector("#finger").style.top = newY - fingerOffset + "px";
    prevX = newX;
    prevY = newY;
    console.log(centerY);

    var angle = Math.degrees(Math.atan2((e.clientY - centerY),(e.clientX - centerX)));
    var lerped = lerp(prevAngle,angle,lerpyBoiAngle);
    document.querySelector("#finger").style.transform = "rotate("+angle+"deg)";
    prevAngle = lerped;
    // console.log(angle);
}
