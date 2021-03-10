const swup = new Swup({
    plugins: [
        new SwupScrollPlugin({
            doScrollingRightAway: false,
            animateScroll: false,
            scrollFriction: 0.3,
            scrollAcceleration: 0.04,
        })
    ]
  });


function init(){
    // start
    if (document.querySelector('#start-magnets')) {
        document.querySelector("#start-magnets").addEventListener("click", function(){
            document.querySelector("#home-index").classList.add("disable-select");
            document.querySelector("#start-magnets").style.animation = "none";
            document.querySelector("#magnet-show-text").style.opacity = 1;
            startMagnets();
            document.getElementsByTagName("canvas")[0].style.opacity = 1;
        });  
        
        AOS.init({
            duration: 800
        });
    }
    if(document.querySelector("#more")){
        function openMore(){
            document.querySelector("#more").style.display = "block";
        }
    }
    if(document.querySelector(".tilt")){
        VanillaTilt.init(document.querySelector(".tilt"), {
            max: 5,
            scale:1.05
        });
    }
}

init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);