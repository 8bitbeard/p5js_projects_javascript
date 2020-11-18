class ScoreBoard {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 405;
    this.h = 40;
    this.values = [0, 0]
  }

  setValues(values) {
    this.values[0] = values[0];
    this.values[1] = values[1];
  }

  show() {
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.h);
    fill(0, 255, 0);
    noStroke();
    textSize(25);
    textFont(pixelFont);
    text(`score: ${this.values[0]}`, this.x + 10, this.y + 28)
    text(`hi-score: ${this.values[1]}`, this.x + this.w - 135 , this.y + 28);
  }
}
