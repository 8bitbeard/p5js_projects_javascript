class Score {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.values = [0, 0]
  }

  update(valueOne, valueTwo) {
    this.values[0] = valueOne;
    this.values[1] = valueTwo;
  }

  show() {
    fill(255);
    noStroke();
    textFont(pixelFont);
    textSize(60);
    text(this.values[0], this.x, this.y)
    text(this.values[1], this.x + 120, this.y)
  }
}