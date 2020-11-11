var ship;
var aliens = [];
var lasers = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    aliens[i] = new Alien(i * 80 + 80, 60);
  }
}

function draw() {
  background(51);
  ship.show();
  ship.move();

  for (var i = 0; i < lasers.length; i++) {
    lasers[i].show();
    lasers[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (lasers[i].hits(aliens[j])) {
        aliens[j].grow();
        lasers[i].desintegrate();
      }
    }
  }

  var edge = false;
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();

    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  for (var i = lasers.length-1; i >= 0; i--) {
    if (lasers[i].desintegrated) {
      lasers.splice(i, 1);
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
    var laser = new Laser(ship.x, height);
    lasers.push(laser);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}
