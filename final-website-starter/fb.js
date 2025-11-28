let fbLines, font, fontSize;
let txt = [];

function preload() {
  fbLines = loadStrings('featherbone.txt');
  font = loadFont('Raleway-Regular.ttf');
  fontSize = 16;
}

function setup() {
  noCanvas();
  textFont(font);
  textSize(fontSize);
  fill(50);

  for (let i = 0; i < fbLines.length; i++) {
    txt[i] = createP(fbLines[i]);
    txt[i].mouseOver(changeStyle);
  }
}

function draw() {}

function changeStyle() {
  this.style("background-color", "pink");
  this.style("padding", "12px");
}
