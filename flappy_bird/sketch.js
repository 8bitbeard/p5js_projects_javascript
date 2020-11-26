var score;
var bird;
var pipes = [];
var grounds = [];

var bgImage;
var gdImage;
var birdModels = [];
var pipeModels = [];

function preload() {
  spritedata = loadJSON('assets/spritesheet_data.json');
  spritesheet = loadImage('assets/spritesheet.png');
}

function setup() {
  let birdImages = spritedata.bird;
  for (var i = 0; i < birdImages.length; i++) {
    let pos = birdImages[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    birdModels.push(img);
  }

  let pipeImages = spritedata.pipes;
  console.log(pipeImages)
  for (var i = 0; i < pipeImages.length; i++) {
    let pos = pipeImages[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    pipeModels.push(img);
  }

  let background = spritedata.background;
  bgImage = spritesheet.get(background.position.x, background.position.y, background.position.w, background.position.h)

  let ground = spritedata.ground;
  gdImage = spritesheet.get(ground.position.x, ground.position.y, ground.position.w, ground.position.h)

  createCanvas(142, 255);
  grounds.push(new Ground(0));
  grounds.push(new Ground(width));
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
      newGame();
    } else {
      bird.flap();
    }
  }
}

function draw() {
  background(0);
  image(bgImage,0, 0)
  bird.edge();
  bird.update();

  if (frameCount % 60 == 0 && bird.alive) {
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
  for(var i = grounds.length - 1; i >= 0; i--) {
    if (bird.alive) {
      grounds[i].move();
    }
    grounds[i].show()
    if (grounds[i].edge()) {
      grounds.push(new Ground(width));
      grounds.splice(i, 1);
    }
  }
}