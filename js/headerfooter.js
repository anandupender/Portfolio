var headContent = document.getElementsByTagName('head')[0];

var googleAnalyticsFirst ="https://www.googletagmanager.com/gtag/js?id=UA-130786913-1"

var googleAnalyticsInner =
`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130786913-1');
`
var gFirst = document.createElement('script');
gFirst.src = googleAnalyticsFirst;

var gInner = document.createElement('script');
var s = document.getElementsByTagName('script')[0];
gInner.text = googleAnalyticsInner;
s.parentNode.insertBefore(gFirst, s);
s.parentNode.insertBefore(gInner, s);

headContent.innerHTML += `
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/favicons/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/favicons/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/favicons/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/favicons/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="60x60" href="images/favicons/apple-touch-icon-60x60.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="images/favicons/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="images/favicons/apple-touch-icon-76x76.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="images/favicons/apple-touch-icon-152x152.png" />
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
  <link href="https://fonts.googleapis.com/css?family=Barlow|Cardo|Karla|Share+Tech+Mono|Lexend+Deca|Manjari" rel="stylesheet">

`

var nav = document.getElementById("nav");
nav.innerHTML += `
  <div id="top-rectangle"></div>
  <div id="logo">
    <a class="name menu-buttons animated fadeInDown" href="index.html"> Anand Upender</a>

  </div>
  <div id="menu">
    <a href="index.html#scrollTo" class="menu-buttons animated fadeInDown" id="work"> Work </a>
    <a href="cooking.html" class="menu-buttons only-mobile animated fadeInDown" style="padding-top:0px;">Food</a>
    <a href="https://stanfordmobility.com" target="_blank" class="menu-buttons only-mobile animated fadeInDown">Mobility</a>
    <a href="place.html" class="menu-buttons only-mobile animated fadeInDown">Spaces</a>
    <div class="dropdown">
      <a href="cooking.html" class="menu-buttons animated fadeInDown" id="research">Research &#x25be;</a>
      <div class="dropdown-content">
        <a href="cooking.html" class="menu-buttons" style="padding-top:0px;">Food</a>
        <a href="https://stanfordmobility.com" target="_blank" class="menu-buttons">Mobility</a>
        <a href="place.html" class="menu-buttons">Spaces</a>
        <!-- a href="#" class="menu-buttons">Web</a>
        <a href="http://erinmacd.stanford.edu/?page_id=352" target="_blank" class="menu-buttons">Research Metaphors</a> --!>
      </div>
    </div>
    <a href="experiments.html" class="menu-buttons animated fadeInDown" id="tinkering"> Tinkering </a>
    <a href="about.html" class="menu-buttons animated fadeInDown no-margin-right" id="about">About</a>
  </div>
  <a href="javascript:void(0);" class="icon animated fadeInDown" onclick="responsiveMenu()">
    <i class="fa fa-bars"></i>
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
  <div id="bottom-rectangle"></div>
  <a class="bottom-button no-margin-left" target="_blank" href="mailto:anandx@stanford.edu"><div class="animated fadeInUp delay-1s">Email</div></a>
  <a class="bottom-button" target="_blank" href="https://drive.google.com/file/d/1MZqF19jbrnSfgC-fTu9E4IYMhKm9M0fJ/view?usp=sharing"><div class="animated fadeInUp delay-1s">Resume</div></a>
  <div id="bottom-middle-button" class="bottom-button bottom-button-large animated fadeInUp delay-1s">Made from scratch with&nbsp;<a class="heart" href="https://www.pantone.com/color-intelligence/color-of-the-year/color-of-the-year-2019" target="_blank">&#9829;</a></div>
  <a class="bottom-button" target="_blank" href="https://www.github.com/anandupender"><div class="animated fadeInUp delay-1s">Github</div></a>
  <a class="bottom-button no-margin-right" href="instagram.html"><div class="animated fadeInUp delay-1s" id="insta-button">Instagram</div></a>
`;
