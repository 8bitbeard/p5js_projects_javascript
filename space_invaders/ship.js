class Ship {

  constructor() {
    this.w = 3;
    this.x = width/2 - 16;
    this.y = height - 70 - 8 * this.w;
    this.dead = false;
    this.exploded = false;
    this.counter = 0;

    this.center;

    this.xdir = 0;

    this.model = [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ];

    this.explosion = [
      [
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
      ], [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
      ]
    ];
  }

  render(model) {
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 14; j++) {
        if (model[i][j] === 1) {
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

  setDir(dir) {
    this.xdir = dir;
  }

  explode() {
    this.dead = true;
  }

  move() {
    if (!this.dead) {
      var halfSize = floor(this.model[0].length * this.w / 2);
      this.x = constrain(this.x + this.xdir * 2, 0 - halfSize, width - halfSize);
      this.center = createVector(this.x + halfSize, this.y)
    }
  }

  show() {
    fill(255);
    rectMode(CENTER);
    var index;
    if (this.dead) {
      if (this.counter < 120) {
        if (this.counter % 10 < 5) {
          index = 0;
        } else {
          index = 1;
        }
        this.render(this.explosion[index])
        this.counter++;
      } else {
        this.exploded = true;
      }
    } else {
      this.render(this.model);
    }
  }
}
