var uiInterface;
var button;
var displayOne;
var displayTwo;
var grid;

var timerValue = 0;
var cols = 16;
var rows = 16;
var xgrid = 545;
var ygrid = 622;
var w = 31;
var totalBombs = 40;
var numberCells = [];
var displayNumbers = [];

function preload() {
  field = loadImage('images/field.png')
  pressedCellButton = loadImage('images/pressed_cell_button.png')
  smileyButton = loadImage('images/smiley_button.png')
  smileyButtonPressed = loadImage('images/smiley_button_pressed.png')
  deadButton = loadImage('images/dead_button.png')
  deadButtonPressed = loadImage('images/dead_button_pressed.png')
  sunglassesButton = loadImage('images/sunglasses_button.png')
  sunglassesButtonPressed = loadImage('images/sunglasses_button_pressed.png')
  normalCell = loadImage('images/normal_cell.png');
  bombInactive = loadImage('images/bomb_inactive.png');
  bombActive = loadImage('images/bomb_active.png');
  flaggedCell = loadImage('images/flagged_cell.png');
  questionCell = loadImage('images/question_cell.png');
  for (var i = 0; i < 9; i++) {
    numberCells[i] = loadImage(`images/${i}.png`);
  }
  for (var i = 0; i <= 10; i++) {
    displayNumbers[i] = loadImage(`images/number_${i}.png`)
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
  setInterval(timeIt, 1000);
  createCanvas(xgrid, ygrid);
  startGame();
}

function startGame() {
  timerValue = 0;
  uiInterface = new Interface(0, 0);
  displayOne = new Display(32, 30, 25, 43);
  displayTwo = new Display(439, 30, 25, 43);
  button = new Button(248, 28);
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
  button.lost = true;
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].flagged = false;
      grid[i][j].revealed = true;
    }
  }
}

function winGame() {
  button.won = true;
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
      } else if (button.contains(mouseX, mouseY)) {
        startGame();
      }
    }
  }
}

function timeIt() {
  if (!button.lost && !button.won) {
    timerValue++;
  }
  displayTwo.setValue(timerValue);
}

function draw() {
  var flaggedNumber = 0;
  var revealedNumber = 0;
  uiInterface.show();
  button.show();
  for (var i = 0; i < cols; i ++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show();
      if (grid[i][j].revealed) {
        revealedNumber++;
      }
      if (grid[i][j].flagged > 0) {
        flaggedNumber++;
      }
    }
  }
  displayOne.setValue(totalBombs - flaggedNumber);
  displayOne.show();
  displayTwo.show();
  if (flaggedNumber === totalBombs && revealedNumber === cols * rows - totalBombs ) {
    winGame();
  }
}
