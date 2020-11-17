class Puck {
  constructor() {
    this.r = 12;
    this.x = width / 2;
    this.y = height / 2;
    this.reset();
  }

  checkLeftPaddle(paddle) {
    if (this.y < paddle.y + paddle.h/2 && this.y > paddle.y - paddle.h/2 && this.x - this.r < paddle.x + paddle.w/2 ) {
      if (this.x > paddle.x) {
        var diff = this.y - (paddle.y - paddle.h/2);
        var rad = radians(45)
        var angle = map(diff, 0, paddle.h, -rad, rad);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        // this.xspeed = -this.xspeed
      }
    }
  }

  checkRightPaddle(paddle) {
    if (this.y < paddle.y + paddle.h/2 && this.y > paddle.y - paddle.h/2 && this.x + this.r > paddle.x - paddle.w/2 ) {
      if (this.x < paddle.x) {
        var diff = this.y - (paddle.y - paddle.h/2);
        var rad = radians(135);
        var angle = map(diff, 0, paddle.h, -rad, rad);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);
        // this.xspeed = -this.xspeed
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
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
