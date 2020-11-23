class Puck {
  constructor() {
    this.r = 7;
    this.x = width / 2;
    this.y = height / 2;
    this.speedMag = 8
    this.reset();
  }

  checkLeftPaddle(paddle) {
    if (this.y < paddle.y + paddle.h/2 && this.y > paddle.y - paddle.h/2 && this.x - this.r < paddle.x + paddle.w/2 ) {
      if (this.x > paddle.x) {
        var diff = this.y - (paddle.y - paddle.h/2);
        var angle = map(diff, 0, paddle.h, -radians(45), radians(45));
        this.xspeed = this.speedMag * cos(angle);
        this.yspeed = this.speedMag * sin(angle);
      }
    }
  }

  checkRightPaddle(paddle) {
    if (this.y < paddle.y + paddle.h/2 && this.y > paddle.y - paddle.h/2 && this.x + this.r > paddle.x - paddle.w/2 ) {
      if (this.x < paddle.x) {
        var diff = this.y - (paddle.y - paddle.h/2);
        var angle = map(diff, 0, paddle.h, radians(225), radians(135));
        this.xspeed = this.speedMag * cos(angle);
        this.yspeed = this.speedMag * sin(angle);
      }
    }
  }

  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.angle = random(-PI/4, PI/4);
    this.xspeed = 5 * cos(this.angle);
    this.yspeed = 5 * sin(this.angle);

    if (random(1) < 0.5) {
      this.xspeed = -this.xspeed;
    }
  }

  edges() {
    if (this.y < 0 || this.y > height) {
      this.yspeed *= -1;
    }
    if (this.x + this.r < 0) {
      rightscore++;
      this.reset();
    }
    if (this.x - this.r > width) {
      leftscore++;
      this.reset();
    }
  }

  show() {
    fill(255);
    rect(this.x, this.y, this.r * 2, this.r * 2);
    // ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
