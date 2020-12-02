let myBox;
let myPiece;
let platform;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // myBox = new Box(width/2, 0, boxDimension, {r:200, g:100, b:50});
  platform = new Platform();
  // myPiece = new Piece(piece_J, width/2, boxDimension, {r: 200, g: 100, b: 50});
  generateNewPiece();
  setInterval( () => applyGravity(), timer);
}

function draw() {
  background(backgroundColor);
  // myBox.show();
  platform.show();
  myPiece.show()
}

function generateNewPiece() {
  let index = Math.floor(Math.random() * pieces.length)
  myPiece = new Piece(pieces[index], width/2, boxDimension, {r: 200, g: 100, b: 50})
}

function applyGravity() {
  if(!myPiece.canCollide(box => box.y + boxDimension === height) && !platform.piecesColliding(myPiece)) {
    myPiece.y += boxDimension;
  } else {
    platform.placePiece(myPiece);
    generateNewPiece();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    myPiece.rotatePiece();
  }
  if (keyCode === LEFT_ARROW && !myPiece.canCollide(box => box.x === begginingPoint) && !platform.piecesColliding(myPiece)) {
    myPiece.x -= boxDimension;
  }
  if (keyCode === RIGHT_ARROW && !myPiece.canCollide(box => box.x + boxDimension == width) && !platform.piecesColliding(myPiece)) {
    myPiece.x += boxDimension;
  }
  if (keyCode === DOWN_ARROW) {
    applyGravity();
  }
}