class Score {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.values = [0, 0]
  }

  setValues() {

  }

  show() {
    fill(255);
    noStroke();
    textFont(pixelFont);
    textSize(20);
    text(`score: ${this.values[0]}`, this.x + 10, this.y + 28)
  }
}
