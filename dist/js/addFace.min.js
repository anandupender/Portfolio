var mouse = [];
var v;
var u;
var lerpyBoi = 0.25;
var userPref = {};
var mainTimer;
var stareTimer;
var lerpyBoiStare = 0.008;
var delayTime = 110;
var myFrameRate = 1;

// HELPER
function myLerp(value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
};

//HELPER
function magnitude(v){
    let newV = v;
    return Math.sqrt((newV[0]*newV[0]) + (newV[1]*newV[1]));
}

function movePupils(){
    var pupils = document.getElementsByClassName("pupil");
    for(var i = 0; i < pupils.length; i++){
        var pupil = pupils[i];
        var v = [(mouse[0] - pupil.dataset.x),(mouse[1] - pupil.dataset.y)];  //vector
        var u = [(v[0]/magnitude(v)), (v[1]/magnitude(v))];   //normalize

        var newPoint = [(parseFloat(pupil.dataset.x) + pupil.dataset.distance*(u[0])),(parseFloat(pupil.dataset.y) + pupil.dataset.distance*(u[1]))];
       
        pupil.style.left = myLerp(parseFloat(pupil.style.left), newPoint[0], lerpyBoi) +"px";
        pupil.style.top = myLerp(parseFloat(pupil.style.top), newPoint[1], lerpyBoi)+"px";
    }
}

function handleMouth(){
    var mouths = document.getElementsByClassName("mouth");
    for(var i = 0; i < mouths.length; i++){
        var mouth = mouths[i];
        var dist = Math.hypot(mouse[0]-mouth.dataset.x, mouse[1]-mouth.dataset.y);
        // if(dist>300){
        //     mouth.style.transform = "rotate(180deg)";
        // }else{
        //     mouth.style.transform = "none";
        // }
    }
}

function stare(){
    var pupils = document.getElementsByClassName("stare");
    for(var i = 0; i < pupils.length; i++){
        var pupil = pupils[i];
       
        pupil.style.left = myLerp(parseFloat(pupil.style.left), parseFloat(pupil.dataset.x), lerpyBoiStare) +"px";
        pupil.style.top = myLerp(parseFloat(pupil.style.top), parseFloat(pupil.dataset.y), lerpyBoiStare)+"px";
    }
}

function handleMouseMove(e){
    clearTimeout(mainTimer);
    clearTimeout(stareTimer);
    mainTimer = window.setTimeout(function(){stareTimer = window.setInterval(stare,myFrameRate);}, delayTime);
    mouse[0] = e.clientX;
    mouse[1] = e.clientY;

    movePupils();
    handleMouth();
}

function populateFace(face){
    var prevX = 0;
    var prevY = 0;
    for(var eye = 0; eye<2;eye++){
        var eyeball = document.createElement("div");
        eyeball.classList.add("eyeball");
        eyeball.style.width = face.dataset.eyeballSize+"px";
        eyeball.style.height = face.dataset.eyeballSize+"px";
        eyeball.style.borderWidth = face.dataset.border+"px";

        var pupil = document.createElement("div");
        pupil.classList.add("pupil");

        if(face.dataset.stare === "true"){
            pupil.classList.add("stare");
        }
        pupil.style.width = face.dataset.pupilSize+"px";
        pupil.style.height = face.dataset.pupilSize+"px";
        pupil.dataset.distance = face.dataset.distance;

        if(face.dataset.eyebrow === "true"){
            var eyebrow = document.createElement("div");
            eyebrow.classList.add("eyebrow");
            eyebrow.style.width = face.dataset.eyeballSize + "px";
        }

        if(eye%2 == 0){
            var location = [];
            if(face.dataset.x === undefined){
                location[0] = Math.random()*screen.width;
            }else{
                location[0] = face.dataset.x;
            }
            if(face.dataset.x === undefined){
                location[1] = Math.random()*screen.height;
            }else{
                location[1] = face.dataset.y;
            }

            prevX = location[0];
            prevY = location[1];
            eyeball.style.left = location[0]+"px";
            eyeball.style.top = location[1]+"px";

            if(face.dataset.eyebrow === "true"){
                eyebrow.style.left = location[0]+"px";
                eyebrow.style.top = (location[1] - parseFloat(face.dataset.eyebrowOffset))+"px";
                eyebrow.classList.add("left");
                face.appendChild(eyebrow);
            }
            pupil.dataset.x = (parseFloat(location[0]) + parseFloat(face.dataset.pupilSize)/2 + parseFloat(face.dataset.border));
            pupil.dataset.y = (parseFloat(location[1]) + parseFloat(face.dataset.pupilSize)/2 + parseFloat(face.dataset.border));
            pupil.style.left = pupil.dataset.x  +"px";
            pupil.style.top = pupil.dataset.y  +"px";

            if(face.dataset.mouth === "true"){
                var mouth = document.createElement("div");
                mouth.classList.add("mouth");
                mouth.dataset.x = parseFloat(location[0]) + parseFloat(face.dataset.eyeballSize)/2 + parseFloat(face.dataset.border);
                mouth.dataset.y = parseFloat(location[1])+ parseFloat(face.dataset.pupilSize) + parseFloat(face.dataset.mouthOffset);
                mouth.style.left = mouth.dataset.x +"px";
                mouth.style.top = mouth.dataset.y +"px";
                mouth.style.width = face.dataset.mouthSize + "px";
                mouth.style.height = (parseFloat(face.dataset.mouthSize) / 120*34)  + "px";
                face.appendChild(mouth);
            }
        }else{
            prevX = parseFloat(prevX) + parseFloat(face.dataset.eyeballSize)/2 + parseFloat(face.dataset.gap);
            prevY = parseFloat(prevY);
            eyeball.style.left = prevX+"px";
            eyeball.style.top = prevY+"px";

            pupil.dataset.x = (prevX + parseFloat(face.dataset.pupilSize)/2 + parseFloat(face.dataset.border));
            pupil.dataset.y = (prevY + parseFloat(face.dataset.pupilSize)/2 + parseFloat(face.dataset.border));
            pupil.style.left = pupil.dataset.x + "px";
            pupil.style.top = pupil.dataset.y+ "px";

            if(face.dataset.eyebrow === "true"){
                eyebrow.style.left = prevX+"px";
                eyebrow.style.top = prevY-parseFloat(face.dataset.eyebrowOffset)+"px";
                eyebrow.classList.add("right");
                face.appendChild(eyebrow);
            }
        }
        face.appendChild(eyeball);
        face.appendChild(pupil);
    }
    return face;
}

function createFace(face){
    if(userPref.size == undefined){
        userPref.size = 100;
    }
    var eyeballSize = userPref.size *.4;
    face.dataset.eyeballSize = eyeballSize
    var pupilSize = eyeballSize * .5;
    face.dataset.pupilSize = pupilSize
    var gap = userPref.size *.4;
    face.dataset.gap = gap
    face.dataset.x = userPref.x;
    face.dataset.y = userPref.y;
    face.dataset.mouth = userPref.mouth;
    face.dataset.eyebrow = userPref.eyebrow;
    face.dataset.eyebrowOffset = eyeballSize/2;
    face.dataset.stare = userPref.stare;
    console.log(face.dataset.stare);

    var border;
    if(userPref.size <= 200){
        border = userPref.size/30;
    }else{
        border = userPref.size/60;
    }
    face.dataset.border = border
    face.dataset.distance = eyeballSize*.25 + border/2;

    var mouthSize = eyeballSize/2 + border + gap;
    face.dataset.mouthSize = mouthSize;
    face.dataset.mouthOffset = eyeballSize;

    return populateFace(face);
}

function addFace(init){
    userPref = init;

    var face = document.createElement("div");
    face.classList.add("face");
    return createFace(face);
}

window.onload = function(){
    addInitialStyling();
    mainTimer = window.setTimeout(function(){stareTimer = window.setInterval(stare,myFrameRate);}, delayTime);
};

document.onmousemove = handleMouseMove;


function raiseEyebrows(){
    document.querySelector(".eyebrow.left").style.transform = "translateY(-10px)";
    document.querySelector(".eyebrow.right").style.transform = "translateY(-10px)";
};

function lowerEyebrows(){
    document.querySelector(".eyebrow.left").style.transform = "none";
    document.querySelector(".eyebrow.right").style.transform = "none";
};

var links = document.getElementsByTagName("a");

for(var i = 0; i < links.length; i++){
    links[i].onmouseover = raiseEyebrows;
    links[i].onmouseout = lowerEyebrows;
}

function addInitialStyling(){
    var initialCSS = `
        .face{
            position:initial;    
        }
        .eyeball{
            position: absolute;   
            border-radius: 50%;
            border: 1px solid black;
            background-color: white;
        }
        .pupil{
            position: absolute;      
            background-color: black;
            border-radius: 50%;
        }
        .eyebrow{
            position: absolute;
            height:1%;
            background-size: contain;
            background-repeat: no-repeat;
            transition: transform 300ms ease;
        }
        .eyebrow.left{
            background-image: url(/images/eyebrowLeft.png);
        }
        .eyebrow.right{
            background-image: url(/images/eyebrowRight.png);
        }
        
        .mouth{
            position: absolute;
            height:30px;                     /*  CHANGE */
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url("/images/smile.png");
            transition: transform ease 500ms;
        }
    `;
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = initialCSS;
    } else {
        style.appendChild(document.createTextNode(initialCSS));
    }
}
