class AlienShip {

  constructor() {
    this.w = 2;
    this.y = 100;
    this.hit = false;
    this.dead = false;
    this.counter = 0;
    this.model = [
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    this.explosion = [
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1],
      [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    ];

    var scores = [50, 100, 150, 200, 250, 300];
    this.value = scores[Math.floor(Math.random() * scores.length)]

    if (random(1) < 0.5) {
      this.x = width - this.model[0].length * this.w;
      this.xdir = -2;
    } else {
      this.x = 0;
      this.xdir = 2;
    }
  }

  edge() {
    return (this.x < 0 || this.x > width)
  }


  move() {
    this.x += this.xdir;
  }

  render(model) {
    for (var i = 0; i < model.length; i++) {
      for (var j = 0; j < model[0].length; j++) {
        if (model[i][j] === 1) {
          fill(255, 0, 0);
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
    if (this.hit) {
      if (this.counter < 10) {
        this.render(this.explosion)
        this.counter++;
      } else{
        this.dead = true;
      }
    } else if (this.dead) {

    } else {
      this.render(this.model)
    }
  }
}
