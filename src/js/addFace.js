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
        if(dist>300){
            mouth.style.transform = "rotate(180deg)";
        }else{
            mouth.style.transform = "none";
        }
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
    //clearTimeout(mainTimer);
    //clearTimeout(stareTimer);
    //mainTimer = window.setTimeout(function(){stareTimer = window.setInterval(stare,myFrameRate);}, delayTime);
    mouse[0] = e.clientX;
    mouse[1] = e.clientY;

    movePupils();
    // handleMouth();
}

function populateFace(face){
    var prevX = 0;
    var prevY = 0;
    for(var eye = 0; eye < 2;eye++){
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
            eyebrow.innerHTML = `
            <svg width="24" height="11" viewBox="0 0 34 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2405 6.50601C23.2251 4.80549 19.6464 4.31561 16.7066 4.44527C13.9301 4.56774 10.6234 5.08056 7.87253 6.7075C6.52737 7.50305 5.3707 8.29192 4.55066 8.88188C4.14132 9.17637 3.81761 9.42004 3.59816 9.58853C3.48847 9.67274 3.40496 9.73808 3.34996 9.78148L3.28917 9.82972L3.27538 9.84077L3.27297 9.84271C2.62888 10.3634 1.68429 10.2638 1.16339 9.61979C0.642407 8.97569 0.742212 8.0312 1.38631 7.51022L2.32964 8.67647C1.38631 7.51022 1.38631 7.51022 1.38631 7.51022L1.38945 7.50768L1.39551 7.50281L1.41625 7.48618C1.43388 7.47209 1.45908 7.45205 1.49153 7.42643C1.55644 7.37522 1.65044 7.3017 1.77119 7.20899C2.0126 7.02364 2.36139 6.7612 2.79867 6.44661C3.67187 5.81841 4.90484 4.97725 6.34537 4.1253C9.1658 2.45724 13.0146 0.605199 16.5744 0.448186C20.4147 0.278802 24.6303 2.15379 27.7142 3.89289C29.2925 4.78299 30.648 5.68058 31.6089 6.35532C32.0901 6.69325 32.4745 6.97673 32.7405 7.17737C32.8736 7.27773 32.9773 7.35747 33.0488 7.41306C33.0846 7.44086 33.1124 7.46263 33.1318 7.47793L33.1547 7.49597L33.1613 7.50125L33.1634 7.50294C33.1634 7.50294 33.1647 7.50399 32.2292 8.67647L33.1647 7.50399C33.8123 8.02069 33.9184 8.9645 33.4016 9.61204C32.8851 10.2594 31.9416 10.3656 31.294 9.84929L31.2909 9.84677L31.2756 9.8347C31.2613 9.82342 31.2387 9.80575 31.2083 9.78214C31.1476 9.73492 31.0553 9.66394 30.9343 9.57269C30.6922 9.39011 30.3354 9.12681 29.8849 8.81046C28.9823 8.17665 27.7118 7.33573 26.2405 6.50601Z" fill="#195CC8"/>
            </svg>
            `;
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
                mouth.innerHTML = `
                <svg width="30" height="8" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.23828 1.60895C2.23828 1.60895 6.7362 9.87488 16 9.87488C25.2639 9.87488 29.7618 1.60895 29.7618 1.60895" stroke="#195CC8" stroke-width="3" stroke-linecap="round"/>
                </svg>
                `;
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

    //eyebrow animations!
    var links = document.getElementsByTagName("a");

    for(var i = 0; i < links.length; i++){
        links[i].onmouseover = raiseEyebrows;
        links[i].onmouseout = lowerEyebrows;
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
        border = userPref.size/20;
    }else{
        border = userPref.size/60;
    }
    face.dataset.border = border
    face.dataset.distance = eyeballSize*.25 + border/2;

    var mouthSize = eyeballSize/2 + border + gap;
    face.dataset.mouthSize = mouthSize;
    face.dataset.mouthOffset = eyeballSize/1.2;

    return populateFace(face);
}

function addFace(init){
    userPref = init;

    var face = document.createElement("div");
    face.classList.add("face");
    return createFace(face);
}

window.onload = function(){
    //mainTimer = window.setTimeout(function(){stareTimer = window.setInterval(stare,myFrameRate);}, delayTime);
};

document.onmousemove = handleMouseMove;

function raiseEyebrows(){
    document.querySelector(".eyebrow.left").style.transform = "translateY(-5px)";
    document.querySelector(".eyebrow.left").style.opacity = 1;
    document.querySelector(".eyebrow.right").style.transform = "translateY(-5px)";
    document.querySelector(".eyebrow.right").style.opacity = 1;
};

function lowerEyebrows(){
    document.querySelector(".eyebrow.left").style.transform = "none";
    document.querySelector(".eyebrow.left").style.opacity = 0;
    document.querySelector(".eyebrow.right").style.transform = "none";
    document.querySelector(".eyebrow.right").style.opacity = 0;
};

