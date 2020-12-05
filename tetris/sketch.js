let myBox;
let myPiece;
let nextPiece;
let platform;
let points;
let score;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // myBox = new Box(width/2, 0, boxDimension, {r:200, g:100, b:50});
  platform = new Platform();
  score = new Score( endPoint + (width - endPoint) / 2, 50);
  nextPiece = new nextPieceDisplay( endPoint + (width - endPoint) / 2, 150, 15)
  // myPiece = new Piece(piece_J, width/2, boxDimension, {r: 200, g: 100, b: 50});
  generateNewPiece();
  setInterval( () => applyGravity(), timer);
}

function draw() {
  background(backgroundColor);
  // myBox.show();
  platform.show();
  myPiece.show()
  score.show();
  nextPiece.show();
}

function generateNewPiece(piece) {
  if (piece) {
    myPiece = new Piece(piece, width/2, 0)
  } else {
    let index = Math.floor(Math.random() * pieces.length)
    myPiece = new Piece(pieces[index], width/2, 0)
  }
}

function applyGravity() {
  let value;
  if(!myPiece.canCollide(box => box.y + boxDimension === height) && !platform.piecesColliding(myPiece)) {
    myPiece.y += boxDimension;
  } else {
    platform.placePiece(myPiece);
    value = platform.cleanFilledRows();
    score.addValue(value);
    generateNewPiece(nextPiece.getNextPiece());
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    myPiece.rotatePiece();
  }
  if (keyCode === LEFT_ARROW && !myPiece.canCollide(box => box.x === begginingPoint) && !platform.piecesColliding(myPiece)) {
    myPiece.x -= boxDimension;
  }
  if (keyCode === RIGHT_ARROW && !myPiece.canCollide(box => box.x + boxDimension == endPoint) && !platform.piecesColliding(myPiece)) {
    myPiece.x += boxDimension;
  }
  if (keyCode === DOWN_ARROW) {
    applyGravity();
  }
  if (keyCode === 32) {
    while(!myPiece.canCollide(box => box.y + boxDimension === height) && !platform.piecesColliding(myPiece)) {
      applyGravity();
      myPiece.show()
    }
  }
}