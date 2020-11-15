class Puck {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.r = 12;
    this.reset();
    // this.angle = random(TWO_PI);
    // this.xspeed = 5 * cos(angle);
    // this.yspeed = 5 * sin(angle);
  }

  checkPaddle(paddle) {
    if (
      this.x > paddle.x &&
      this.y < paddle.y + paddle.h / 2 &&
      this.y > paddle.y - paddle.h / 2
    ) {
      this.xpeed *= -1;
    }
  }

  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.angle = random(TWO_PI);
    this.xspeed = 5 * cos(this.angle);
    this.yspeed = 5 * sin(this.angle);
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
    if (this.x < 0) {
      rightscore++;
      this.reset();
    }
    if (this.x > width) {
      leftscore++;
      this.reset();
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
