var notifications = [
    {app:"Facebook",text:"Pedro tried a new brand of canned soup yesterday!"},
    {app:"Twitter",text:"26 people near you successfully brushed their teeth today!"},
    {app:"Facebook",text:"5 strangers are going to an event in your area. Want to join them?"},
    {app:"RealSite.com",text:"Free iPhone! Click to claim!"},
    {app:"NYT",text:"In other news, the world is still burning..."},
    {app:"Screen Time",text:"You've spent 18 of the last 24 hours looking at me"},
    {app:"Wallet",text:"$36.00 spent on that gym membership you forgot to cancel"},
    {app:"Venmo",text:"4 of your friends paid each other for 🍆, click to join the fun"},
    {app:"Uber",text:"Updates to your privacy policy! Your live location data is now publically available at godmode.uber.com"},
];

var colorMappings = {
    "Facebook": "#2c6af7",
    "Twitter": "#0ea0f5",
    "NYT": "#000000",
    "Venmo": "#0ea0f5",
    "Wallet":"#38bb4e"
}

var main = document.querySelector(".notification-container");
var bell = document.querySelector("#bell-number");
var counter = 0;

var timer = window.setTimeout(function(){
    createParodyNotification();
},1000);

var timeIncrementor = window.setInterval(updateTimes,1000);

// Function: create a new notification until the list runs out
function createParodyNotification(){
    var wrapper = document.createElement('div');
    wrapper.classList.add("notification");
    wrapper.classList.add("loading");

    var top = document.createElement('div');
    top.classList.add("top");
    var topLeft = document.createElement('div');
    topLeft.classList.add("top-left");
    var appIcon = document.createElement('div');
    appIcon.classList.add("app-icon");
    if(colorMappings[notifications[counter].app] !== undefined){
        appIcon.style.backgroundColor = colorMappings[notifications[counter].app];
    }
    var appName = document.createElement('div');
    appName.classList.add("app-name");
    appName.innerHTML = notifications[counter].app;
    var time = document.createElement('div');
    time.classList.add("time");
    time.dataset.count = 0;
    time.innerHTML = "0 second ago";
    topLeft.appendChild(appIcon);
    topLeft.appendChild(appName);
    top.appendChild(topLeft);
    top.appendChild(time);

    var text = document.createElement('h3');
    text.innerHTML = notifications[counter].text;

    wrapper.appendChild(top);
    wrapper.appendChild(text);
    main.insertBefore(wrapper,main.firstChild);

    window.setTimeout(function(){
        wrapper.classList.remove("loading");
        bell.innerHTML = counter+1;

        if(counter == 0){
            bell.style.display = "flex";
        }

        counter++;
        if(counter < notifications.length){
            window.setTimeout(createParodyNotification,(Math.random() * 5000 + 400));
        }
    },300);
}

// Function: update the tiemstamps of all visible notifications, every second
let secsInMin = 60;
function updateTimes(){
    for(var i = 0; i < main.children.length;i++){
        if(main.children[i].querySelector(".time").dataset.count < secsInMin){
            main.children[i].querySelector(".time").innerHTML = main.children[i].querySelector(".time").dataset.count + " seconds ago";
        }else{
            main.children[i].querySelector(".time").innerHTML = Math.floor(main.children[i].querySelector(".time").dataset.count/secsInMin) + " minutes ago";
        }
        main.children[i].querySelector(".time").dataset.count++;
    }
}

document.querySelector("#about").onclick = openModal;

function openModal(){
    console.log("open");
    document.querySelector("#modal").classList.add("on");
    document.querySelector("#main").classList.add("dim");
    
    // Debouncing
    window.setTimeout(function(){
        document.querySelector("#main").onclick = closeModal;
    },20);
}

function closeModal(){
    console.log("close");
    document.querySelector("#modal").classList.remove("on");
    document.querySelector("#main").classList.remove("dim");
    document.querySelector("#main").onclick = nothing;
}

function nothing(){};