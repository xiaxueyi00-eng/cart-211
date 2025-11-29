let video;

function setup() {
  const container = document.getElementById("camera-container");
  const w = container.offsetWidth || 640;
  const h = container.offsetHeight || 480;

  let c = createCanvas(w, h);
  c.parent(container);


  c.elt.getContext('2d', { willReadFrequently: true });

  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  clear();

  if (!video.width || !video.height) return;

  video.loadPixels();
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let gray = (r + g + b) / 3;

      pixels[index + 0] = gray;
      pixels[index + 1] = gray;
      pixels[index + 2] = gray;
      pixels[index + 3] = 255;
    }
  }

  updatePixels();
}

function windowResized() {
  const container = document.getElementById("camera-container");
  const w = container.offsetWidth;
  const h = container.offsetHeight;
  resizeCanvas(w, h);
  if (video) video.size(w, h);
}
