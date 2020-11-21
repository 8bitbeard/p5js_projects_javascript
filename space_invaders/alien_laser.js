class AlienLaser {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 2;
    this.yspeed = 5;
    this.counter = 0;
    this.vanish = false;
    this.desintegrated = false;
    this.center = 0;
    this.model = [
      [0, 1, 0],
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
    ];

    this.explosion = [
      [0, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 0],
      [1, 0, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
    ];
  }

  desintegrate() {
    this.desintegrated = true;
    // this.x = this. x - floor(this.explosion[0].length / 2) * this.w;
  }

  move() {
    this.y += this.yspeed;
    this.center = createVector(this.x + (this.model[0].length * this.w) / 2, this.y + this.model.length * this.w);
  }

  edge() {
    if (this.center.y > height) {
      this.desintegrate()
      this.yspeed = 0;
    }
  }

  // hits(obj) {
  //   if (this.center.x > obj.x && this.center.x < obj.x + obj.model[0].length * obj.w) {
  //     if (this.center.y > obj.y && this.center.y < obj.y + obj.model.length * obj.w) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  hits(obj) {
    if (this.x > obj.x && this.x < obj.x + obj.model[0].length * obj.w) {
      for (var i = this.yspeed; i <= 0; i++) {
        var point = createVector(this.x, this.y + i);
        if (point.y > obj.y && point.y < obj.y + obj.model.length * obj.w) {
          this.center = createVector(point.x, point.y);
          return true;
        }
      }
    }
    return false;
  }

  render(model) {
    for (var i = 0; i < model.length; i++) {
      for (var j = 0; j < model[0].length; j++) {
        if (model[i][j] === 1) {
          fill(255);
          rect(
            this.x + (j * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  show() {
    if (this.desintegrated) {
      if (this.counter < 5) {
        this.render(this.explosion);
        this.counter++;
      } else {
        this.vanish = true;
      }
    } else if (this.vanish) {

    } else {
      this.render(this.model);
    }
  }
}
