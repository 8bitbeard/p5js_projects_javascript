class Laser {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 2
    this.yspeed = 7
    this.vanish = false
    this.desintegrated = false;
    this.counter = 0;
    this.explosion = [
      [1, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 1, 0, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 1],
    ];
  }

  desintegrate() {
    this.desintegrated = true;
  }

  hits(obj) {
    if (this.x > obj.x && this.x < obj.x + obj.model[0][0].length * obj.w) {
      if (this.y > obj.y && this.y < obj.y + obj.model[0].length * obj.w) {
        return true;
      }
    }
    return false;
  }

  crash(obj) {
    if (this.x > obj.x && this.x < obj.x + obj.model[0].length * obj.w) {
      if (this.y > obj.y && this.y < obj.y + obj.model.length * obj.w) {
        return true;
      }
    }
    return false;
  }

  edge() {
    if (this.y < 0) {
      this.vanish = true;
      this.yspeed = 0;
      this.y = 0;
    }
  }

  move() {
    this.y -= this.yspeed;
  }

  render(object) {
    for (var i = 0; i < object.length; i++) {
      for (var j = 0; j < object[0].length; j++) {
        if (object[i][j] === 1) {
          fill(255, 0, 0);
          rect(
            this.x + (j * this.w) - (4 * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  show() {
    noStroke();
    if (this.vanish) {
      if (this.counter < 10) {
        this.render(this.explosion)
        this.counter++;
      } else{
        this.desintegrated = true;
      }
    } else if (this.desintegrated) {

    } else {
      fill(255);
      rect(this.x, this.y, 1, 8);
    }
  }
}
