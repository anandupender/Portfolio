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
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,600;1,800&Roboto:wght@300;400;700&display=swap" rel="stylesheet">
`;

var nav = document.getElementById("nav");
nav.classList.add("animate__animated");
nav.classList.add("animate__slideInDown");
nav.classList.add("animate__delay-3s");
nav.innerHTML += `
  <h1 id="logo">
    <a class="name menu-buttons" href="/index.html" title="Anand Upender Logo">Anand Upender</a>
    <div id="name-subtitle">Food Strategist & UX Engineer,<br/> based in San Francisco</div>
  </h1>
  <nav class="navigation">
    <ul id="menu">
      <li><a href="/food.html" class="menu-buttons" id="food" title="Anand's Food"> Food </a></li>
      <li><a href="/design.html" class="menu-buttons" id="Design" title="Design">Design</a></li>
      <li><a href="/about.html" class="menu-buttons" id="about" title="About Anand">About</a></li>
      <li><a href="mailto:anand.upender@gmail.com" class="menu-buttons" id="email" title="email">
      <svg width="25" height="22" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top:3px">
        <path d="M29.1746 23.4761H4.13591C3.12136 23.4761 2.14836 23.0731 1.43097 22.3557C0.713575 21.6383 0.310547 20.6653 0.310547 19.6507L0.310547 4.34929C0.310547 3.33474 0.713575 2.36174 1.43097 1.64435C2.14836 0.926954 3.12136 0.523926 4.13591 0.523926L29.1746 0.523926C30.1892 0.523926 31.1622 0.926954 31.8796 1.64435C32.597 2.36174 33 3.33474 33 4.34929V19.6507C33 20.6653 32.597 21.6383 31.8796 22.3557C31.1622 23.0731 30.1892 23.4761 29.1746 23.4761ZM4.13591 2.61049C3.67475 2.61049 3.23248 2.79368 2.90639 3.11977C2.5803 3.44586 2.39711 3.88813 2.39711 4.34929V19.6507C2.39711 20.1119 2.5803 20.5542 2.90639 20.8803C3.23248 21.2063 3.67475 21.3895 4.13591 21.3895H29.1746C29.6358 21.3895 30.0781 21.2063 30.4042 20.8803C30.7302 20.5542 30.9134 20.1119 30.9134 19.6507V4.34929C30.9134 3.88813 30.7302 3.44586 30.4042 3.11977C30.0781 2.79368 29.6358 2.61049 29.1746 2.61049H4.13591Z" fill="#195CC8"/>
        <path d="M16.6552 16.7574C16.1544 16.7584 15.6582 16.6605 15.1952 16.4696C14.7321 16.2787 14.3113 15.9983 13.9566 15.6446L1.43726 3.12524L2.8283 1.59509L15.445 14.2118C15.6066 14.3738 15.7984 14.5022 16.0097 14.5899C16.2209 14.6775 16.4474 14.7227 16.6761 14.7227C16.9048 14.7227 17.1313 14.6775 17.3425 14.5899C17.5538 14.5022 17.7457 14.3738 17.9072 14.2118L30.1622 1.91503L31.6367 3.30607L19.3539 15.589C19.0038 15.9527 18.585 16.2434 18.1218 16.4439C17.6585 16.6445 17.16 16.7511 16.6552 16.7574V16.7574Z" fill="#195CC8"/>
        <path d="M2.85607 21.9599L2.06318 21.2783L1.32593 20.5271L10.7433 11.1237L12.2178 12.5982L2.85607 21.9599Z" fill="#195CC8"/>
        <path d="M22.5416 11.1054L21.0662 12.5808L30.1548 21.6694L31.6302 20.194L22.5416 11.1054Z" fill="#195CC8"/>
        </svg>
      </a></li>
      <li><a href="https://www.instagram.com/pixels_and_plates/" target="_blank" class="menu-buttons no-margin-right" id="instagram" title="instagram">
      <svg width="22" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <a href="mailto:anand.upender@gmail.com" class="h1-large" id="email-copy">Let's chat!</a>
        </div>
        <div>
            <p>Built from scratch, this site is my ongoing digital playground to experiment with storytelling, emotional design, and micro-interactions. I use it both as a tool to learn, and to express.<br/>
            <a href="https://github.com/anandupender/Portfolio">View the code here.</a>                
            </p>
        </div>
        <div class="links">
            <a target="_blank" rel="noopener noreferrer" href="https://www.anandupender.com/data/resume.pdf">Design Resume</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.anandupender.com/data/resume-food.pdf">Food Resume</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anandupender/">LinkedIn</a>
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