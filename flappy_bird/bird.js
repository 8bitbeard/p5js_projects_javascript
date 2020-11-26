class Bird {
  constructor() {
    this.x = 30;
    this.y = height/2;
    this.r = 17;

    this.angle = 0;

    this.gravity = 0.5;
    this.velocity = 0;
    this.airFriction = 0.9;
    this.flapForce = -10;

    this.alive = true;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= this.airFriction;
    this.y += this.velocity;
    this.angle += PI/48;
    this.angle = constrain(this.angle, -PI/4, PI/2)
  }

  edge() {
    if (this.y + this.r/2 > 220) {
      this.velocity = 0;
      this.y = 220 - this.r / 2;
      this.alive = false;
    } else if (this.y < 0) {
      this.velocity = 0;
      this.y = 0;
    }
  }

  hits(object) {
    if (this.x + this.r/2 > object.x - object.w/2 && this.x - this.r/2 < object.x + object.w/2) {
      if (this.y + this.r/2 > object.y + object.g/2 || this.y - this.r/2 < object.y - object.g/2) {
        return true;
      }
    }
    return false;
  }

  flap() {
    if (this.alive) {
      this.velocity += this.flapForce;
      this.angle -= PI;
    }
  }

  show() {
    push()
    fill(255);
    noSmooth();
    imageMode(CENTER)
    translate(this.x, this.y)
    rotate(this.angle)
    // ellipseMode(CENTER)
    // ellipse(0, 0, this.r, this.r)
    image(birdModels[0], 0, 0)
    pop()
  }
}