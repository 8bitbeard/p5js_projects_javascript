class Score {

  constructor() {
    this.x = width / 2;
    this.y = 150;

    this.value = 0;
  }

  update() {
    this.value += 1;
  }

  show() {
    push();
    fill(255);
    noStroke();
    textSize(40);
    var textValue = textWidth(this.value.toString());
    text(this.value, this.x - floor(textValue/2), this.y);
    pop();
  }
}