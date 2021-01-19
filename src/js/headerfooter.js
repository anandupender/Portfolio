var headContent = document.getElementsByTagName("head")[0];

var googleAnalyticsFirst =
  "https://www.googletagmanager.com/gtag/js?id=UA-130786913-1";

var googleAnalyticsInner = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130786913-1');
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
  <meta name="msapplication-TileImage" content="images/favicons/mstile-144x144.png" />
  <meta name="msapplication-square70x70logo" content="images/favicons/mstile-70x70.png" />
  <meta name="msapplication-square150x150logo" content="images/favicons/mstile-150x150.png" />
  <meta name="msapplication-wide310x150logo" content="images/favicons/mstile-310x150.png" />
  <meta name="msapplication-square310x310logo" content="images/favicons/mstile-310x310.png" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css?family=Lexend+Deca|Montserrat:thin,regular,bold,extra-bold" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,600;1,800&Roboto:wght@400;700&display=swap" rel="stylesheet">

`;

var nav = document.getElementById("nav");
nav.innerHTML += `
  <div id="logo">
    <a class="name menu-buttons animated fadeInDown" href="/index.html" title="Anand Upender Logo"> Anand Upender</a>

  </div>
  <nav class="navigation">
    <ul id="menu">
      <li><a href="/index.html#scrollTo" class="menu-buttons animated fadeInDown" id="work" title="Anand's Work"> Work </a></li>
      <li><a href="/food.html" class="menu-buttons animated fadeInDown" id="food" title="Anand's Food"> Food Design </a></li>
      <li><a href="https://anandu.substack.com/welcome" target="_blank" class="menu-buttons animated fadeInDown" id="writing" title="Cool Sh*t"> Cool Sh*t </a></li>
      <li><a href="/about.html" class="menu-buttons animated fadeInDown" id="about" title="About Anand">About</a></li>
      <li><a href="https://www.instagram.com/pixels_and_plates/" target="_blank" class="menu-buttons animated fadeInDown no-margin-right" id="instagram" title="instagram"><img id="insta" src="/images/insta.png"></a></li>
    </div>
  </nav>
  <a href="javascript:void(0);" class="icon animated fadeInDown" onclick="responsiveMenu()" title="hamburger menu for mobile">
    <img src="images/hamburger.svg" style="background-color:transparent"/>
  </a>
`;

function responsiveMenu() {
  var x = document.getElementById("nav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}

var footer = document.getElementById("footer");
footer.innerHTML += `
  <a class="bottom-button no-margin-left" target="_blank" href="mailto:anandx@stanford.edu"><div class="animated fadeInUp">Email</div></a>
  <a class="bottom-button no-mobile" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1MZqF19jbrnSfgC-fTu9E4IYMhKm9M0fJ/view?usp=sharing"><div class="animated fadeInUp">Resume</div></a>
  <div id="bottom-middle-button" class="bottom-button bottom-button-large animated fadeInUp"><a target="_blank" href="https://github.com/anandupender/Portfolio">Coded from scratch with&nbsp;<span class="heart">&#9829;</span></a></div>
  <a class="bottom-button no-mobile" target="_blank" rel="noopener noreferrer" href="https://www.github.com/anandupender"><div class="animated fadeInUp">Github</div></a>
  <a class="bottom-button no-margin-right" target="_blank" href="https://www.linkedin.com/in/anandupender/"><div class="animated fadeInUp">LinkedIn</div></a>
`;
