let myBox;
let myPiece;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // myBox = new Box(width/2, 0, boxDimension, {r:200, g:100, b:50});
  myPiece = new Piece(piece_S, width/2, boxDimension, {r: 200, g: 100, b: 50});
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