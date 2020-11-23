var puck;
var left;
var right;

var leftscore = 0;
var rightscore = 0;

function preload() {
  pixelFont = loadFont('assets/Pixeboy.ttf');
}

function setup() {
  createCanvas(600, 400);
  score = new Score(width/2, 50);
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function drawCenterLine() {
  push();
  var h = floor(height / 25)
  for (var i = 0; i < 25; i++) {
    var y = i * floor(height / 25)
    if (i % 2 == 0) {
      rect(width/2 - 1, y, 4, h)
    }
  }
  pop();
}

function keyPressed() {
  if (keyCode === 65) {
    left.move(-10);
  } else if (keyCode === 90) {
    left.move(10);
  }
  if (keyCode === 74) {
    right.move(-10);
  } else if (keyCode === 78) {
    right.move(10);
  }
}

function draw() {
  background(0);
  stroke(255)

  drawCenterLine();

  puck.checkLeftPaddle(left);
  puck.checkRightPaddle(right);

  left.show();
  right.show();
  left.update();
  right.update();

  puck.update();
  puck.edges();
  puck.show();

  score.update(leftscore, rightscore);
  score.show();
}
