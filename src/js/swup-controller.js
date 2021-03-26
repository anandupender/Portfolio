let face = `
,,,,,,,,,,,,,,,,,,,,,,,,,::::,::::::::~~
,,,,.,,,,,,,,.,,$I88DI$.,,:,,:::::::::~:
,,,,,.,..,.,ZID8MDNNMNMOMMM?,,,:::::::::
,,,,,,,,?O7MMMMMNMMMNMMMMMMMMMD:::::::~~
,,..,...+DNNMMNMNNMMNMMMMDMDM8MM~::::~~:
,,,..,I8DDMMNMMMMMMMMMMMMMNNMMDMM:::::::
.,..,.OMMMMMMMMMNMMMNNMMMMDMMMMMN+::::::
...,.OMMMMMMDO8ZOZZ$$$7$ODMMNMDMMD~:::::
....,DMMMNOZ$$I?7777III+??I8MMMMMM7~~:::
.....DNMMO$77I???III7I?+???I7$MMMMN:::::
....NNNNN$77I?II??I7I+?I7?+?7$DMMMN:~~::
....$MNNN7IIIIII?I?II=+?I??OZ$OMMM7~~~~:
.....MMMM7OM8NN8O8Z7??ODNMNDON7MMM?::~~~
,,.,.7NMDMNI??$ZZDDZZD888OZ$I7D=MM?:::~~
,,,,,:M+MD+77MMOD$MOIM$NOMNMO8MMMM7~~~~~
,,,,,=MMN?=+I$OODIM+?8$$MOZ$$7IMMD=~~~~~
:::,,:D7MIM=+?7IIM7?I7N$7?I=~?7M??~~~~==
::~::::88?+~+?77III:?=+=N8Z?~+7$N~~~~~~=
:~:~::,ZDM?++78II8$+$MM$?8Z7II$7I~~~==~=
:::::::,7O777D8ZO8NMNND8O8O8ZZZ$:~~~=~~+
:~::::::,,$$IOO8ZZZZ88DDDMNOZOZ::~~~==+=
:::~~:~::.$$?878MD==?~?Z87ZZO88::~~~====
~~~~:::,,,M7I77I$=+??+I7I7ZZZ8=:~~~~~==+
~~~~::::,:,O$I$77OMMNNZ7I?$ZOI:::~~~===+
~~~:::::,,,?N$7I$$7ZZ7??IZO8I::~~~~===++
~~:::::::,,Z$$O87O$OOO8DN8ZZ:::~~~~====?
~~~::::, .O$7II$NDNNMMDN8OZZZ8.~=====+=+
~~:~.. ...ZZ777I7$8DDDDO$ZZZZ$Z...=+++++
~.. .  .  I$$7777I7ZO8ZZZZOZZ7D.    .??+
..  .. .. .O$7$Z77IIZZOOOOOOOZN.      ..
..  .. .    .$Z$$$$$O8OO8OZOZM.         
.. .,. ..    ..D$ZZOOOOOOOZZ:           
 .,.,.  .       .IDD88OOON...           
.:.                  ..                 
`;

const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: false,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        }),
    ]
  });


function init(){
    // start
    AOS.init({
        duration: 800
    });

    //eyebrow animations!
    var links = document.getElementsByTagName("a");

    document.querySelector('#nav').classList.remove("responsive");

    for(var i = 0; i < links.length; i++){
        links[i].onmouseover = raiseEyebrows;
        links[i].onmouseout = lowerEyebrows;
    }
    if (document.querySelector('#start-magnets') !== null) {
        document.querySelector("#start-magnets").addEventListener("click", function(){
            document.querySelector("#home-index").classList.add("disable-select");
            document.querySelector("#start-magnets").style.animation = "none";
            document.querySelector("#magnet-show-text").style.opacity = 1;
            startMagnets();
            document.getElementsByTagName("canvas")[0].style.display = "block";
            document.getElementsByTagName("canvas")[0].style.opacity = 1;
        });  
    }else{
        //turn off and remove magnets
        if(document.getElementsByTagName("canvas")[0] !== null && document.getElementsByTagName("canvas")[0] !== undefined){
            document.getElementsByTagName("canvas")[0].style.opacity = 0;
            document.getElementsByTagName("canvas")[0].style.display = "none";
            endMagnets();
        }
    }

    if(document.querySelector("#more") !== null){
        document.querySelector("#read-more").addEventListener("click", function(){
            document.querySelector("#more").style.display = "block";
        });
    }
    if(document.querySelector(".tilt") !== null){
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 5,
            scale:1.05
        });
    }

}

init();

initialAnimation();

function initialAnimation(){
    // add first face
    window.setTimeout(function(){
        let size = 250;
        document.querySelector("#swup-background").appendChild(addFace({
            x:window.innerWidth/2 - size/2 - 5,
            y:window.innerHeight/2 - window.innerHeight/16,
            size:size,
            eyebrow:true,
            mouth:true,
            stare:false,
            class:"white"
        }));
    }
    ,100);

    var eyeballTimer;

    window.setTimeout(function(){
        eyeballTimer = window.setInterval(() => {movePupilsIntro("left")},8);
    }
    ,450);

    window.setTimeout(function(){
        clearInterval(eyeballTimer);
        eyeballTimer = window.setInterval(() => {movePupilsIntro("right")},18);
    }
    ,700);

    window.setTimeout(function(){
        clearInterval(eyeballTimer);
        eyeballTimer = window.setInterval(() => {movePupilsIntro("down")},20);
    }
    ,1400);

    window.setTimeout(raiseEyebrows,1600);

    window.setTimeout(function(){
        clearInterval(eyeballTimer);
    }
    ,1700);

    

    window.setTimeout(() => {
        document.querySelector("#swup-background").classList.remove("initial");
        document.querySelector("#swup-background").classList.add("second");
        lowerEyebrows();
        window.setTimeout(() => {
            document.querySelector("#swup-background").classList.add("third");
            document.querySelector("#swup-background").classList.remove("second");
            window.setTimeout(() => {
                document.querySelector("#swup-background").classList.remove("third");
            },100);
        },750);

        // add nav face to desktop
        if(getWidth() >= 1080){
            document.querySelector("#nav").insertBefore(addFace({
                x:window.innerWidth/2 - 50,
                y:26,
                size:54,
                eyebrow:true,
                mouth:true,
                stare:false
            }), 
            document.querySelector("#nav").children[1]);
            
            document.onmousemove = handleMouseMoveFace;
        }
    },2400);

}

// fun console log
console.log(face);

// this event runs for every page view after initial load
swup.on('contentReplaced', init);