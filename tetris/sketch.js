let mybox;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  myBox = new Box(width/2, 0, boxDimension, {r:200, g:100, b:50});
  setInterval( () => applyGravity(), timer);
}

function draw() {
  background(backgroundColor);
  myBox.show();
}

function applyGravity() {
  myBox.y += boxDimension;
}