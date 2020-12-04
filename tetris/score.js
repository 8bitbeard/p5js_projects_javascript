class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y
    this.value = 0;
  }

  addValue(value) {
    this.value += value;
  }

  show() {
    push();
    textSize(16);
    textAlign(CENTER);
    fill(255)
    text(this.value, this.x, this.y);
    pop();
  }
}