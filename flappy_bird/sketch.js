var pixelScale = 2.6;

var score;
var bird;
var pipes = [];
var grounds = [];

var bgImage;
var gdImage;
var homeScreenModels = [];
var getReadyScreenModels = [];
var gameOverScreenModels = [];
var birdModels = [];
var pipeModels = [];
var smallNumberModels = [];
var mediumNumberModels = [];
var bigNumberModels = [];
var medalModels = [];

var gameState = 0;

function preload() {
  spritedata = loadJSON('assets/spritesheet_data.json');
  spritesheet = loadImage('assets/spritesheet.png');
}

function setup() {
  var canvas = createCanvas(142, 255);
  canvas.style("width", width*pixelScale+"px");
  canvas.style("height", height*pixelScale+"px");
  noSmooth();

  getImages();

  grounds.push(new Ground(0));
  grounds.push(new Ground(width));
  score = new Score();
  newGame();
}

function getImages() {
  let homeScreenImages = spritedata.homeScreen;
  for (var i = 0; i < homeScreenImages.length; i++) {
    let pos = homeScreenImages[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    homeScreenModels.push(img);
  }

  let getReadyScreenImages = spritedata.getReadyScreen;
  for (var i = 0; i < getReadyScreenImages.length; i++) {
    let pos = getReadyScreenImages[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    getReadyScreenModels.push(img);
  }

  let gameOverScreenImages = spritedata.gameOverScreen;
  for (var i = 0; i < gameOverScreenImages.length; i++) {
    let pos = gameOverScreenImages[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    gameOverScreenModels.push(img);
  }

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

  let smallNumbers = spritedata.smallNumbers;
  for (var i = 0; i < smallNumbers.length; i++) {
    let pos = smallNumbers[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    smallNumberModels.push(img)
  }

  let mediumNumbers = spritedata.mediumNumbers;
  for (var i = 0; i < mediumNumbers.length; i++) {
    let pos = mediumNumbers[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    mediumNumberModels.push(img)
  }

  let bigNumber = spritedata.bigNumbers;
  for (var i = 0; i < bigNumber.length; i++) {
    let pos = bigNumber[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    bigNumberModels.push(img)
  }

  let medals = spritedata.medals;
  for (var i = 0; i < medals.length; i++) {
    let pos = medals[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    medalModels.push(img)
  }
}

function newGame() {
  gameState = 0;
  score.restart();
  bird = new Bird();
  pipes = [];
}

function keyPressed() {
  if (key == ' ') {
    if (gameState === 1) {
      gameState = 2;
      bird.flap();
    } else if (gameState === 2) {
      bird.flap();
    }
  }
}

function mousePressed() {
  if (gameState === 0) {
    if (mouseX > 15 && mouseX < 66 && mouseY > 155 && mouseY < 184) {
      gameState = 1;
    }
  } else if(gameState === 1) {
      gameState = 2;
      bird.flap();
  } else if (gameState === 2) {
      bird.flap();
  } else if (gameState === 3) {
    if (mouseX > 15 && mouseX < 67 && mouseY > 185 && mouseY < 214) {
      newGame();
      gameState = 1;
    }
  }
}

function homeScreen() {
  image(bgImage,0, 0)
  bird.show();
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
  push();
  imageMode(CENTER)
  image(homeScreenModels[0], width/2, 80)
  image(homeScreenModels[1], width/2 - 30, 170)
  image(homeScreenModels[2], width/2 + 30, 170)
  pop();
}

function getReadyScreen() {
  image(bgImage,0, 0)
  score.show(1);
  bird.show();
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
  push();
  imageMode(CENTER)
  image(getReadyScreenModels[0], width/2, 80)
  image(getReadyScreenModels[1], width/2, 130)
  image(getReadyScreenModels[2], width/2, 160)
  pop();

}

function inProgress() {
  image(bgImage,0, 0)
  bird.edge();
  bird.update();

  if (frameCount % 60 == 0 && bird.alive) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].move();
    pipes[i].show();
    if (bird.hits(pipes[i])) {
      bird.alive = false;
      gameState = 3;
    }
    if (pipes[i].edge()) {
      pipes.splice(i, 1);
    }
    if (pipes[i].pass(bird)) {
      score.update()
    }
  }

  bird.show();
  score.show(1);

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

function gameOver() {
  image(bgImage,0, 0)
  bird.edge();
  bird.update();
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
  }
  bird.show();

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

  push();
  imageMode(CENTER)
  image(gameOverScreenModels[0], width/2, 80)
  image(gameOverScreenModels[1], width/2, 140)
  image(gameOverScreenModels[2], width/2 - 30, 200)
  image(gameOverScreenModels[3], width/2 + 30, 200)
  if (score.newHighScore) {
    image(gameOverScreenModels[4], width/2 + 18, 144)
  }
  let medal = constrain(floor(score.score / 10), 0, 3)
  if (medal >= 1) {
    image(medalModels[medal - 1], width/2 - 32, 144)
  }
  pop();
  score.show(2);
}

function draw() {
  if (gameState === 0) {
    homeScreen();
  } else if (gameState === 1) {
    getReadyScreen();
  } else if (gameState === 2) {
    inProgress();
  } else {
    gameOver();
  }
}