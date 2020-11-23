class Score {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 20;
    this.value = 0;
    this.level = 1;
    this.newLive = false;
    this.module = 0;
  }

  setValue(value) {
    this.value = value;
  }

  update(value) {
    var old_value = this.module
    this.value += value;
    this.module = this.value % 1500;
    return (this.module < old_value)
  }

  setLevel(value) {
    this.level = value;
  }

  show() {
    fill(255);
    noStroke();
    textFont(pixelFont);
    textSize(25);
    text(`score: ${this.value}`, this.x + 10, this.y + 28)
    text(`level: ${this.level}`, this.x + 380, this.y + 28)
  }
}
