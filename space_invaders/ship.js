class Ship {

  constructor() {
    this.w = 2;
    this.x = width/2;
    this.y = height - 8 * this.w;

    this.xdir = 0;

    this.spaceship = [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ];
  }

  render(spaceship) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 14; j++) {
        if (spaceship[i][j] === 1) {
          rect(
            this.x + (j * this.w) - (6 * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  setDir(dir) {
    this.xdir = dir;
  }

  move() {
    this.x += this.xdir * 2;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    this.render(this.spaceship);
  }
}
