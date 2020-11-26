class Pipe {

  constructor() {
    this.w = 25;
    this.g = 55;

    this.x = width + this.w/2;
    this.y = height/2 + random(-80, 30);

    this.velocity = -1.5;

    this.counted = false;
  }

  edge() {
    return (this.x + this.w < 0)
  }

  move() {
    this.x += this.velocity
  }

  pass(object) {
    if (object.x > this.x && !this.counted) {
      this.counted = true;
      return true;
    }
    return false;
  }

  show() {
    push()
    imageMode(CORNER);
    image(pipeModels[0], this.x - this.w/2, this.y - 160 - this.g/2)
    image(pipeModels[1], this.x - this.w/2, this.y + this.g/2)
    pop();
  }
}