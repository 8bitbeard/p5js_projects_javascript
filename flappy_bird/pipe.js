class Pipe {

  constructor() {
    this.w = 60;
    this.g = 130;

    this.x = width + this.w/2;
    this.y = Math.floor(Math.random() * 200) + 150

    // this.x = mouseX;
    // this.y = mouseY;

    this.velocity = -5;

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

  // update() {
  //   this.x = mouseX;
  //   this.y = mouseY;
  // }

  show() {
    push()
    fill(0,255,0);
    rectMode(CORNER);
    rect(this.x - this.w/2, 0, this.w, this.y - this.g/2)
    rect(this.x - this.w/2, this.y + this.g/2, this.w, height)
    pop();
  }
}