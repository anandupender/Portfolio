let mic, fft;

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT(0.92, 64);
  fft.setInput(mic);
}

function draw() {
  // background(255);
  let spectrum = fft.analyze();
  let mapped = map(fft.getEnergy("bass"), 0, 255, 1, 1.2);
  var name = document.getElementById("logo");
  console.log(fft.getEnergy("bass"));
  name.style.transform = "scale(" + mapped + ")";
}
