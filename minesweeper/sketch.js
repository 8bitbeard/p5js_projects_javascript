var grid;
var xgrid = 545;
var ygrid = 622;
var w = 31;
var totalBombs = 25;
var normalCell;
var flaggedCell;
var numberCells = [];

function preload() {
  field = loadImage('images/field.png')
  normalCell = loadImage('images/normal_cell.png');
  bombInactive = loadImage('images/bomb_inactive.png');
  bombActive = loadImage('images/bomb_active.png');
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
  createCanvas(xgrid, ygrid);
  cols = floor(width / w);
  rows = floor(height / w);
  cols = 16;
  rows = 16;
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

  for (var n = 0; n < totalBombs; n++) {
    var index = floor(random(options.length));
    var choice = options[index]
    var i = choice[0];
    var j = choice[1];
    options.splice(index, 1);
    grid[i][j].bomb = true;
  }


  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].countBombs();
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
  if (mouseButton === LEFT){
    for (var i = 0; i < cols; i ++) {
      for (var j = 0; j < rows; j++) {
        if (grid[i][j].contains(mouseX, mouseY)) {
          grid[i][j].pressed = true;
        }
      }
    }
  }
}

function mouseReleased() {
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

            if(grid[i][j].bomb) {
              grid[i][j].activated = true;
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
  image(field, 0, 0, xgrid, ygrid);
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
    }
  }
}
