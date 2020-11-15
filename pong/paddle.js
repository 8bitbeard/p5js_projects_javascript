class Paddle {

  constructor(left) {
    this.w = 10;
    this.h = 100;
    this.x = (left) ? this.w : width - this.w;
    this.y = height / 2;

    this.ychange = 0;
  }

  update() {
    this.y += this.ychange;
    this.y = constrain(this.y, this.h / 2, height - this.h / 2);
  }

  move(steps) {
    this.ychange = steps;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
