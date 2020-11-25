class Pipe {

  constructor() {
    this.x = width;
    this.y = Math.floor(Math.random() * 200) + 150

    // this.x = mouseX;
    // this.y = mouseY;

    this.w = 60;
    this.g = 140;

    this.velocity = -3;
  }

  edge() {
    return (this.x + this.w < 0)
  }

  update() {
    this.x += this.velocity
  }

  // update() {
  //   this.x = mouseX;
  //   this.y = mouseY;
  // }

  show() {
    push()
    fill(0,255,0);
    rectMode(CORNER);
    rect(this.x - this.w/2, 0, this.w, this.y - this.g/2 )
    rect(this.x - this.w/2, this.y + this.g/2, this.w, height )
    pop();
  }
}