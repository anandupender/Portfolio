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
            document.getElementsByTagName("canvas")[0].style.opacity = 1;
        });  
    }
    if(document.querySelector("#more") !== null){
        function openMore(){
            document.querySelector("#more").style.display = "block";
        }
    }
    if(document.querySelector(".tilt") !== null){
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 5,
            scale:1.05
        });
    }
}

init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);