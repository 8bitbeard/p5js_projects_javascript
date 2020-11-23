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
    var valueOneWidth = textWidth(this.values[0].toString())
    var valueTwoWidth = textWidth(this.values[1].toString())

    text(this.values[0], this.x - 70 - floor(valueOneWidth / 2), this.y)
    text(this.values[1], this.x + 70 - floor(valueTwoWidth / 2), this.y)
  }
}