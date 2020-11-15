class Button {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;

    this.won = false;
    this.lost = false;
  }

  contains(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }

  show() {
    if (mouseIsPressed && this.contains(mouseX, mouseY)) {
      image(smileyButtonPressed, this.x, this.y, this.w, this.w);
      if (this.won) {
        image(sunglassesButtonPressed, this.x, this.y, this.w, this.w);
      } else if (this.lost) {
        image(deadButtonPressed, this.x, this.y, this.w, this.w);
      }
    } else {
      image(smileyButton, this.x, this.y, this.w, this.w);
      if (mouseIsPressed && mouseButton === LEFT && mouseX > 25 && mouseX < 521 && mouseY > 105 && mouseY < 601) {
        image(pressedCellButton, this.x, this.y, this.w, this.w);
      }
      if (this.won) {
        image(sunglassesButton, this.x, this.y, this.w, this.w);
      } else if (this.lost) {
        image(deadButton, this.x, this.y, this.w, this.w);
      }
    }
  }
}