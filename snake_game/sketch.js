var field;
var scoreBoard;
var actualScore;
var bestScore;
var snake;
var food;

var scoreValues = [0, 0];

function preload() {
  pixelFont = loadFont('assets/Pixeboy.ttf');
}

function setup() {
  createCanvas(450, 500);
  frameRate(10);
  field = new Field(22, 70);
  scoreBoard = new ScoreBoard(22, 22);
  newGame();
}

function newGame() {
  if (scoreValues[0] > scoreValues[1]) {
    scoreValues[1] = scoreValues[0];
  }
  scoreValues[0] = 0;
  snake = new Snake(field);
  food = new Food(field);
  loop();
}

function mousePressed() {
  if (mouseButton === LEFT && snake.dead) {
    newGame();
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && snake.xdir != 1) {
    snake.setDir(-1, 0);
  }
  else if (keyCode == RIGHT_ARROW && snake.xdir != -1) {
    snake.setDir(1, 0);
  }
  else if (keyCode == DOWN_ARROW && snake.ydir != -1) {
    snake.setDir(0, 1);
  }
  else if (keyCode == UP_ARROW && snake.ydir != 1) {
    snake.setDir(0, -1);
  }
}

function draw() {
  background(0);
  snake.update();
  snake.hits(field);
  field.show();
  scoreBoard.setValues(scoreValues);
  scoreBoard.show();
  if (snake.dead) {
    fill(0, 255, 0);
    textSize(25);
    textFont(pixelFont);
    text('you died!', 175, 200);
    text('click here to restart the game', 70, 260);
  } else {
    if (snake.eat(food)) {
      food.spawn(field, snake);
      scoreValues[0]++;
    }
    snake.show();
    food.show();
  }
}
