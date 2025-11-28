

var videoScale = 16;
var cols, rows;
var video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / videoScale);
  rows = floor(height / videoScale);

  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function draw() {
  background(0);
  video.loadPixels();

  noStroke();
  rectMode(CENTER);

  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {

      var loc = ((cols - i - 1) + j * cols) * 4;

      var r = video.pixels[loc];
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];

      var brightness = (r + g + b) / 3;

      var sz = map(brightness, 0, 255, 0, videoScale);

      fill(255);
      var x = i * videoScale;
      var y = j * videoScale;

      rect(x + videoScale / 2, y + videoScale / 2, sz, sz);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
