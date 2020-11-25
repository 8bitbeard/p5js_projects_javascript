var score;
var bird;
var pipes = [];

// function preload() {
//   spritedata = loadJSON('assets/spritesheet_data.json');
//   spritesheet = loadImage('assets/spritesheet.png');
// }

function setup() {
  createCanvas(400, 600);
  newGame();
}

function newGame() {
  score = new Score();
  bird = new Bird();
  pipes = [];
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if(!bird.alive) {
      console.log('inside')
      newGame();
    } else {
      bird.flap();
    }
  }
}

function draw() {
  background(0);
  bird.edge();
  bird.update();

  if (frameCount % 40 == 0 && bird.alive) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    if (bird.alive) {
      pipes[i].move();
    }
    pipes[i].show();
    if (bird.hits(pipes[i])) {
      bird.alive = false;
    }
    if (pipes[i].edge()) {
      pipes.splice(i, 1);
    }
    if (pipes[i].pass(bird)) {
      score.update()
    }
  }

  bird.show();
  score.show();
}