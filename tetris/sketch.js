let myBox;
let myPiece;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // myBox = new Box(width/2, 0, boxDimension, {r:200, g:100, b:50});
  myPiece = new Piece(piece_J, width/2, boxDimension, {r: 200, g: 100, b: 50});
  setInterval( () => applyGravity(), timer);
}

function draw() {
  background(backgroundColor);
  // myBox.show();
  myPiece.show()
}

function applyGravity() {
  myPiece.y += boxDimension;
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    myPiece.rotatePiece();
  }
  if (keyCode === LEFT_ARROW && !myPiece.canCollide(box => box.x === begginingPoint)) {
    myPiece.x -= boxDimension;
  }
  if (keyCode === RIGHT_ARROW && !myPiece.canCollide(box => box.x + boxDimension == width)) {
    myPiece.x += boxDimension;
  }
  if (keyCode === DOWN_ARROW) {
    applyGravity();
  }
}