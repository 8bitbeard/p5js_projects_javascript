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

    this.floatAngle = 0.0;
    this.floatInc = PI / 32;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= this.airFriction;
    this.y += this.velocity;
    if (this.velocity > 2) {
      this.angle += PI/40;
    }
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

  float(pos) {
    push()
    let x = (pos) ? pos : this.x;
    let y = floor(5 * sin(this.floatAngle))
    imageMode(CENTER)
    translate(x, this.y)
    this.floatAngle+= this.floatInc
    image(birdModels[floor(frameCount / 10) % 4], 0, y)
    pop()
  }

  show() {
    push()
    imageMode(CENTER)
    translate(this.x, this.y)
    rotate(this.angle)
    image(birdModels[floor(frameCount / 5) % 4], 0, 0)
    pop()
  }
}