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
    console.log("anand");
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

// fun console log
console.log(face);

// this event runs for every page view after initial load
swup.on('contentReplaced', init);