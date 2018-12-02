function onHover(){
	var background = document.getElementById('background');
	background.style.backgroundColor = "black";

	var overlayText = document.getElementById('overlay-text');
	overlayText.style.opacity = 1;

  var text = document.getElementsByClassName("manifesto");
  text[0].style.color="white";

	var name = document.getElementsByClassName("name");
	name[0].style.color="white";

	var remove = document.getElementById('footer');
	remove.style.display = "none";

	var header = document.getElementById('nav');
	header.style.zIndex = 0;
}

function offHover(){
	var background = document.getElementById('background');
	background.style.backgroundColor = "white";

	var overlayText = document.getElementById('overlay-text');
	overlayText.style.opacity = 0;

	var image = document.getElementById('profile-image');
	image.style.opacity = 1;

	var name = document.getElementsByClassName("name");
	name[0].style.color="red";

  var text = document.getElementsByClassName("manifesto");
  text[0].style.color="black";

	var remove = document.getElementById('footer');
	remove.style.display = "flex";

	var header = document.getElementById('nav');
	header.style.zIndex = 6;
}
