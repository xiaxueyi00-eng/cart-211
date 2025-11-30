let video;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("camera-container");

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(0);

  image(video, 0, 0, width, height);
  filter(GRAY);

  loadPixels();
  for (let i = 0; i < pixels.length; i+=4) {
    let rand = random(-10,10);
    pixels[i] = pixels[i]+rand;
    pixels[i+1] = pixels[i+1]+rand;
    pixels[i+2] = pixels[i+2]+rand;
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
