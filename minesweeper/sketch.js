var grid;
var w = 20;
var totalBees = 15;
var normalCell;
var flaggedCell;
var numberCells = [];

function preload() {
  normalCell = loadImage('images/normal_cell.png');
  bombInactive = loadImage('images/bomb_inactive.png');
  flaggedCell = loadImage('images/flagged_cell.png');
  questionCell = loadImage('images/question_cell.png');
  for (var i = 0; i < 9; i++) {
    numberCells[i] = loadImage(`images/${i}.png`);
  }
}

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(301, 301);
  cols = floor(width / w);
  rows = floor(height / w);
  grid = make2DArray(cols, rows);
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j] = new Cell(i, j, w);
    }
  }

  var options = [];
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++){
      options.push([i, j]);
    }
  }

  for (var n = 0; n < totalBees; n++) {
    var index = floor(random(options.length));
    var choice = options[index]
    var i = choice[0];
    var j = choice[1];
    options.splice(index, 1);
    grid[i][j].bee = true;
  }


  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countBees();
    }
  }
}

function gameOver() {
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].flagged = false;
      grid[i][j].revealed = true;
    }
  }
}

function mousePressed() {
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
        if (mouseButton == CENTER) {
          if (!grid[i][j].revealed) {
            grid[i][j].mark();
          }
        } else {
          if (grid[i][j].flagged != 1) {
            grid[i][j].reveal();

            if(grid[i][j].bee) {
              gameOver();
            }
          }
        }
      }
    }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
