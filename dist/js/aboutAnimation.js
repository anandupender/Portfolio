var fontSize = 42;
window.onload = function(){
    if(document.getElementById("name") !== null){
        document.getElementById("name").style.fontSize = fontSize + "px";
    }
}

function measureText(pText, pStyle) {
    var lDiv = document.createElement('div');

    document.body.appendChild(lDiv);

    if (pStyle != null) {
        lDiv.style = pStyle;
    }
    lDiv.style.fontSize = "" + fontSize + "px";
    lDiv.style.position = "absolute";
    lDiv.style.left = -1000;
    lDiv.style.top = -1000;
    lDiv.style.fontWeight = 700;

    lDiv.innerHTML = pText;

    var lResult = {
        width: lDiv.clientWidth,
        height: lDiv.clientHeight
    };

    document.body.removeChild(lDiv);
    lDiv = null;

    return lResult;
}

var counter = 0;
var colorCounter = 0;
var content = [{"f":"experience designer","l":"amateur chef"}, {"f":"artist","l":"milkshake lover"}, {"f":"engineer","l":"first-born"}, {"f":"Indian American","l":"dog-lover"}, {"f":"introvert","l":"trumpeter"}];

// var colors = ["#E3C354","#6E54E3", "#5DFBD0","#fa7268"];

var curr1;
var curr2;

// OPTION 1: Mouse Hover
// document.getElementById("name").onmouseenter = open
// document.getElementById("name").onmouseleave = close;

// OPTION 2: Timer
var timer = window.setTimeout(open, 1400);

function open(){
    curr1 = "&nbsp;" + content[counter].f + "&nbsp;";
    // random scheme doesn't feel right
    // curr1 = "&nbsp;" + texts1[Math.floor(Math.random() * texts1.length)] + "&nbsp;";
    document.getElementById("second").innerHTML = curr1;
    document.getElementById("second").style.width = measureText(curr1).width + "px";

    curr2 = "&nbsp;" + content[counter].l;
    // curr2 = "&nbsp;" + texts2[Math.floor(Math.random() * texts2.length)];
    document.getElementById("fourth").innerHTML = curr2;
    document.getElementById("fourth").style.opacity = 1;
    document.getElementById("second").style.opacity = 1;
    document.getElementById("fourth").style.width = measureText(curr2).width + "px";

    document.getElementById("hi").style.opacity = .15;
    document.getElementById("pronounce").style.opacity = .15;

    counter++;
    if(counter >= content.length){
        counter = 0;
    }
    timer = window.setTimeout(close, 3400);
};

function close(){
    // document.getElementById("second").innerHTML = "";
    document.getElementById("second").style.width = "0px";
    // document.getElementById("fourth").innerHTML = "";
    document.getElementById("fourth").style.opacity = 0;
    document.getElementById("second").style.opacity = 0;
    document.getElementById("fourth").style.width = "0px";

    document.getElementById("hi").style.opacity = 1;
    document.getElementById("pronounce").style.opacity = 1;
    timer = window.setTimeout(open, 1800);
};