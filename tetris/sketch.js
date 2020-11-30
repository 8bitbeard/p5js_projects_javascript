var grid;
var piece;

function setup() {
  createCanvas(400, 600);
  grid = new Grid(20, 10);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    grid.piece.move(-1)
  } else if (keyCode === RIGHT_ARROW) {
    grid.piece.move(1);
  }
}

function draw() {
  background(0);
  grid.update();
  grid.show();
}