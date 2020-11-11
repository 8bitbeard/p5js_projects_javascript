function Laser(x, y) {
  this.x = x;
  this.y = y;
  this.r = 5;
  this.desintegrated = false;

  this.show = function() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.desintegrate = function() {
    this.desintegrated = true;
  }

  this.hits = function(alien) {
    var d = dist(this.x, this.y, alien.x, alien.y);
    if (d < this.r + alien.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y -= 5;
  }
}
