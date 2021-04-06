var headContent = document.getElementsByTagName("head")[0];

var googleAnalyticsFirst =
  "https://www.googletagmanager.com/gtag/js?id=G-9NN7C6HK3L";

var googleAnalyticsInner = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9NN7C6HK3L');
`;
var gFirst = document.createElement("script");

gFirst.src = googleAnalyticsFirst;

var gInner = document.createElement("script");
var s = document.getElementsByTagName("script")[0];
gInner.text = googleAnalyticsInner;
s.parentNode.insertBefore(gFirst, s);
s.parentNode.insertBefore(gInner, s);

headContent.innerHTML += `
  <meta name="description" content="Anand is a creative strategist and digital prototyper with a knack for moving teams forward through humble and thoughtful design directions." />
  <meta name="keywords" content="stanford, anand upender, web design, digital design, designer, community creator" />
  <link rel="apple-touch-icon" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-196x196.png" sizes="196x196" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-96x96.png" sizes="96x96" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-16x16.png" sizes="16x16" />
  <link rel="icon" type="image/png" href="images/favicons/favicon-128.png" sizes="128x128" />
  <meta name="application-name" content="&nbsp;"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Lexend+Deca|Montserrat:thin,regular,bold,extra-bold" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,600;1,800&Roboto:wght@300;400;700&display=swap" rel="stylesheet">

`;

var nav = document.getElementById("nav");
nav.classList.add("animate__animated");
nav.classList.add("animate__slideInDown");
nav.classList.add("animate__delay-3s");
nav.innerHTML += `
  <div id="logo">
    <a class="name menu-buttons" href="/index.html" title="Anand Upender Logo"> Anand Upender</a>
    <div id="name-subtitle">UX Engineer currently at TED Conferences,<br/> based in NYC</div>
  </div>
  <nav class="navigation">
    <ul id="menu">
    <li>
      <a href="/index.html#projects" class="menu-buttons" id="Work" title="Work">Work</a></li>
      <li><a href="/food.html" class="menu-buttons" id="food" title="Anand's Food"> Food & Design </a></li>
      <li><a href="/about.html" class="menu-buttons" id="about" title="About Anand">About</a></li>
      <li><a href="https://www.instagram.com/pixels_and_plates/" target="_blank" class="menu-buttons no-margin-right" id="instagram" title="instagram">
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.8333 2.33337H8.16665C4.94499 2.33337 2.33331 4.94505 2.33331 8.16671V19.8334C2.33331 23.055 4.94499 25.6667 8.16665 25.6667H19.8333C23.055 25.6667 25.6666 23.055 25.6666 19.8334V8.16671C25.6666 4.94505 23.055 2.33337 19.8333 2.33337Z" stroke="#195CC8" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.6667 13.265C18.8106 14.2359 18.6448 15.2276 18.1927 16.0988C17.7406 16.9701 17.0253 17.6766 16.1485 18.1179C15.2718 18.5592 14.2782 18.7128 13.3091 18.5569C12.34 18.401 11.4447 17.9434 10.7506 17.2493C10.0566 16.5553 9.599 15.66 9.44306 14.6909C9.28712 13.7218 9.44073 12.7282 9.88203 11.8514C10.3233 10.9746 11.0299 10.2593 11.9011 9.80727C12.7724 9.35518 13.764 9.18934 14.735 9.33332C15.7254 9.48018 16.6423 9.94169 17.3503 10.6497C18.0583 11.3577 18.5198 12.2746 18.6667 13.265Z" stroke="#195CC8" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.4167 7.58337H20.4284" stroke="#195CC8" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

      </a></li>
    </div>
  </nav>
  <a href="javascript:void(0);" class="icon" onclick="responsiveMenu()" title="hamburger menu for mobile">
    <img src="images/hamburger.svg" style="background-color:transparent"/>
  </a>
`;

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}

//eyes
function getWidth() {
    if (self.innerWidth) {
      return self.innerWidth;
    }
    if (document.documentElement && document.documentElement.clientWidth) {
      return document.documentElement.clientWidth;
    }
    if (document.body) {
      return document.body.clientWidth;
    }
  }

let lastKnownScrollPosition = 0;
let scrolled = false;
let ticking = false;
let cutoff = 50;

function headerScroll() {  
    if (scrolled) {  
        document.querySelector("#nav").classList.add("scroll");
    } else {  
        document.querySelector("#nav").classList.remove("scroll");
    }  
}  

document.addEventListener('scroll', function(e) {

    if (!ticking) {
        window.requestAnimationFrame(function() {
            if(lastKnownScrollPosition < cutoff && window.scrollY >= cutoff){
                scrolled = true;
                headerScroll();
            }else if(lastKnownScrollPosition >= cutoff && window.scrollY < cutoff){
                scrolled = false;
                headerScroll();
            }
        
            lastKnownScrollPosition = window.scrollY;
            ticking = false;
        });

        ticking = true;
    }
});

// FOOTER

var footer = document.getElementById("footer");
footer.innerHTML += `
<div class="content">
        <div>
            <p>Curious?</p>
            <a class="h1-large" href="mailto:anand.upender@gmail.com"></a>
        </div>
        <div>
            <p>This site is my ongoing digital playground to experiment with storytelling, emotional design, and micro-interactions. I use it both as a tool to learn, and to express.<br/>
            <a href="https://github.com/anandupender/Portfolio">View the code here.</a>                
            </p>
        </div>
        <div class="links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anandupender/">LinkedIn</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.anandupender.com/data/resume.pdf">Resume</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/anandupender">Github</a>
            <a target="_blank" rel="noopener noreferrer" href="http://instagram.com/pixels_and_plates">Instagram</a>
        </div>
        <span class="small">
            If you’re reading this you should take a break from the <i>screens</i> and go smell the roses.
        </span>
    </div>
    <div class="footer-eyeball" data-aos="fade-left"></div>
  `;


  // add finger
  if(document.querySelector("#finger") !== null){
    document.querySelector("#finger").onclick = function(){
        document.onmousemove = function(e){
            if(getWidth() >= 1080){
                handleMouseMoveFace(e);
            }
            handleMouseMoveFinger(e);
        } 
        document.querySelector("#finger").classList.remove("transition");
        document.querySelector("#finger").classList.add("clicked");
    };
}