var ship;
var alienShip;
var aliens;
var shipLaser;
var alienLasers = [];
var bunkers = [];
var score;
var lives;

var gameOver = false;
var gameWon = false;

var cols = 11;
var rows = 5;

var aliensAlive;
var aliensBottom;

function preload() {
  pixelFont = loadFont('assets/Pixeboy.ttf');
}

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  createCanvas(500, 600);
  this.startGame();
}

function startGame() {
  score = new Score(10, 10);
  ship = new Ship();
  lives = new Lives(10, 575);
  aliensBottom = createVector(1, 1);
  aliens = make2DArray(cols, rows);
  for (var i = 0; i < 4; i++) {
    bunkers[i] = new Bunker(i * 100 + 74, 450)
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      switch (j) {
        case 2:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 140, 1)
          break;
        case 3:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 140, 2)
          break;
        case 4:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 140, 2)
          break;
        default:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 140, j)
          break;
      }
    }
  }
  aliensAlive = cols * rows;
  gameOver = false;
  gameWon = false;
  frameCount = 0;
}

function mousePressed() {
  if (mouseButton === LEFT && gameOver || gameWon) {
    startGame();
  }
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  line(0, 70, width, 70);
  line(0, 565, width, 565);

  lives.show();
  score.show();

  if (gameOver) {
    fill(255);
    textSize(25);
    textFont(pixelFont);
    text('Game Over!', 185, 250);
    text('click here to restart the game', 85, 300);
  } else if (gameWon) {
    fill(255);
    textSize(25);
    textFont(pixelFont);
    text('You Won!', 185, 250);
    text('click here to play again!', 85, 300);
  } else {
    ship.show();
    ship.move();

    if (lives.lives == 0 && ship.exploded) {
      gameOver = true;
    }

    if (aliensAlive == 0) {
      gameWon = true;
    }

    if (alienShip) {
      alienShip.move();
      alienShip.show();
      if (shipLaser && shipLaser.crash(alienShip)) {
        shipLaser.desintegrate();
        alienShip.hit = true;
        score.update(alienShip.value)
      }
      if (alienShip.edge() || alienShip.dead) {
        alienShip = null;
      }
    } else {
      if (frameCount % 1500 == 0) {
        alienShip = new AlienShip()
      }
    }

    var edge = false;
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        if (!aliens[i][j].dead && aliens[i][j].getBottom().y > aliensBottom.y) {
          aliensBottom = aliens[i][j].getBottom();
          if (aliensBottom.y > ship.y) {
            gameOver = true;
          }
        }
        aliens[i][j].show();

        if (frameCount % 10 == 0 && !ship.dead) {
          aliens[i][j].move();
        }

        if (aliens[i][j].edge()) {
          edge = true;
        }

        if (shipLaser && shipLaser.hits(aliens[i][j]) && !aliens[i][j].dead) {
          shipLaser.desintegrate();
          aliens[i][j].dead = true;
          score.update(aliens[i][j].value)
          aliensAlive -= 1;
        }
      }
    }

    if (random(1) < 0.009 && !ship.dead) {
      var options = [];
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          if (!aliens[i][j].dead) {
            options.push(aliens[i][j])
          }
        }
      }
      if (options.length > 0) {
        var index = options[floor(random(options.length))]
        var laser = new AlienLaser(index.center, index.y)
        alienLasers.push(laser)
      }
    }

    for (var i = 0; i < bunkers.length; i++) {
      bunkers[i].show();
      if (aliensBottom.y > bunkers[i].y) {
        bunkers[i].cutChunk(aliensBottom)
      }
      if (shipLaser && shipLaser.crash(bunkers[i])) {
        if (bunkers[i].getStructurePoint(shipLaser.center)) {
          shipLaser.desintegrate();
          bunkers[i].hits(shipLaser)
        }
      }
      for (var j = 0; j < alienLasers.length; j++) {
        if (alienLasers[j].hits(bunkers[i])) {
          if (bunkers[i].getStructurePoint(alienLasers[j].center)) {
            alienLasers[j].vanish = true;
            bunkers[i].hits(alienLasers[j])
          }
        }
      }
    }

    for (var i = 0; i < alienLasers.length; i++) {
      if (alienLasers[i].hits(ship)) {
        for (var i = alienLasers.length-1; i >= 0; i--) {
          alienLasers.splice(i, 1);
        }
        ship.explode();
        lives.update(-1);
      }
    }

    if (ship.exploded) {
      ship = new Ship();
    }

    if (edge) {
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          aliens[i][j].shiftDown();
        }
      }
    }

    for (var i = 0; i < alienLasers.length; i++) {
      alienLasers[i].move();
      alienLasers[i].show();
      alienLasers[i].edge();
    }

    if (shipLaser) {
      shipLaser.move();
      shipLaser.show();
      shipLaser.edge();
      if (shipLaser.desintegrated) {
        shipLaser = null;
      }
    }

    for (var i = alienLasers.length-1; i >= 0; i--) {
      if (alienLasers[i].vanish) {
        alienLasers.splice(i, 1);
      }
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    if (!shipLaser && !ship.dead) {
      shipLaser = new Laser(ship.center.x, ship.center.y);
    }
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
