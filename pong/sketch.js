var puck;
var left;
var right;

var leftscore = 0;
var rightscore = 0;

function setup() {
  createCanvas(600, 400);
  puck = new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
}

function keyReleased() {
  left.move(0);
  right.move(0);
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

  puck.checkLeftPaddle(left);
  puck.checkRightPaddle(right);

  left.show();
  right.show();
  left.update();
  right.update();

  puck.update();
  puck.edges();
  puck.show();

  fill(255);
  textSize(32);
  text(leftscore, 32, 40);
  text(rightscore, width-64, 40);
}
