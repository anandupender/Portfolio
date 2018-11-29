function onHover(){
	var background = document.getElementById('background');
	background.style.backgroundColor = "black";

	var overlayText = document.getElementById('overlay-text');
	overlayText.style.opacity = 1;

	var image = document.getElementById('profile-image');
	image.style.opacity = 0;

	var container = document.getElementById('profile-container');
	container.style.backgroundColor = "white";

  var text = document.getElementsByClassName("manifesto");
  text[0].style.color="white";
  text[1].style.color="white";
}

function offHover(){
	var background = document.getElementById('background');
	background.style.backgroundColor = "white";

	var overlayText = document.getElementById('overlay-text');
	overlayText.style.opacity = 0;

	var image = document.getElementById('profile-image');
	image.style.opacity = 1;

  var text = document.getElementsByClassName("manifesto");
  text[0].style.color="black";
  text[1].style.color="black";
}
