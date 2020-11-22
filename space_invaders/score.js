class Score {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.value = 0;
  }

  update(value) {
    this.value += value
  }

  show() {
    fill(255);
    noStroke();
    textFont(pixelFont);
    textSize(25);
    text(`score: ${this.value}`, this.x + 10, this.y + 28)
  }
}
