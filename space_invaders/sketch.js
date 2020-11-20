var ship;
var alienShip;
var aliens;
var shipLaser;
var lasers = [];
var bunkers = [];
var score;

var cols = 11;
var rows = 5;

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
  score = new Score(10, 10);
  ship = new Ship();
  aliens = make2DArray(cols, rows);
  for (var i = 0; i < 4; i++) {
    bunkers[i] = new Bunker(i * 100 + 80, 530)
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      switch (j) {
        case 2:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 160, 1)
          break;
        case 3:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 160, 2)
          break;
        case 4:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 160, 2)
          break;
        default:
          aliens[i][j] = new Alien(i * 40 + 47, j * 40 + 160, j)
          break;
      }
    }
  }
}

function draw() {
  background(0);
  score.show();
  ship.show();
  ship.move();

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
      aliens[i][j].show();
      if (frameCount % 10 == 0) {
        aliens[i][j].move();
      }

      if (aliens[i][j].edge()) {
        edge = true;
      }
      if (shipLaser && shipLaser.hits(aliens[i][j]) && !aliens[i][j].dead) {
        shipLaser.desintegrate();
        aliens[i][j].dead = true;
        score.update(aliens[i][j].value)
      }
    }
  }

  for (var i = 0; i < bunkers.length; i++) {
    bunkers[i].update();
    bunkers[i].show();
    if (shipLaser && shipLaser.crash(bunkers[i])) {
      shipLaser.desintegrate();
      bunkers[i].hits(shipLaser)

    }
  }

  if (edge) {
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        aliens[i][j].shiftDown();
      }
    }
  }

  if (shipLaser) {
    shipLaser.move();
    shipLaser.show();
    shipLaser.edge();
    if (shipLaser.desintegrated) {
      shipLaser = null;
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
    if (!shipLaser) {
      shipLaser = new Laser(ship.x, ship.y);
    }
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
