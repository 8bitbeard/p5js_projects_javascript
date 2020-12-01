var grid;
var cells = []
var piece;

var cellWidth = 24;

var gridRows = 20;
var gridCols = 10;

var canvasWidth = 400;
var canvasHeight = 600;

var gridX = canvasWidth/2 - (gridCols * cellWidth)/2;
var gridY = canvasHeight - (gridRows * cellWidth);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  cells = make2DArray(gridRows, gridCols, cellWidth);
  for (let i = 0; i < gridCols; i++) {
    for (let j = 0; j < gridRows; j++) {
      let x = i * cellWidth + cellWidth/2 + gridX;
      let y = j * cellWidth + cellWidth/2 + gridY;
      this.cells[i][j] = new Cell(x, y, cellWidth);
    }
  }
  grid = new Grid(cells, gridX, gridY, cellWidth);
}

function make2DArray(cols, rows) {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    grid.movePiece(-1, 0)
  } else if (keyCode === RIGHT_ARROW) {
    grid.movePiece(1, 0);
  } else if (keyCode === UP_ARROW) {
    grid.movePiece(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    grid.movePiece(0, 1);
  } else if (keyCode === 82) {
    grid.rotatePiece(-1)
  } else if (keyCode === 69) {
    grid.rotatePiece(1)
  }
}

function draw() {
  frameRate(1);
  background(0);
  grid.update();
  grid.show();
}