class Cell {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;

    this.empty = true;
    this.currentPiece = false;
  }

  show() {
    push();
    if (this.empty) {
      fill(50)
    } else {
      fill(255)
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.w);
    pop();
  }
}