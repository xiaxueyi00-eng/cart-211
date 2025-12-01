let fragments = [];

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style("position", "fixed");
  c.style("top", "0");
  c.style("left", "0");
  c.style("z-index", "-1");
  textSize(50);
  textAlign(CENTER, CENTER);
  noStroke();
}
function draw() {

  clear();

  for (let f of fragments) {
    push();
    translate(f.x, f.y);
    rotate(f.angle);

    stroke(0);
    fill(224,224,224);
    text(f.txt, 0, 0);
    pop();
  }
}

function scatterText(t) {
  for (let i = 0; i < 5; i++) {
    fragments.push({
      txt: t,
      x: random(width),
      y: random(height),
      angle: random(TWO_PI),
      h: random(360)
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
