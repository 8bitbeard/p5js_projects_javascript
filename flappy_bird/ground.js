class Ground {
  constructor(x) {
    this.x = x;
    this.y = 220;
  }

  move() {
    this.x -= 1.5;
  }

  edge() {
    return (this.x + width < 0);
  }

  show() {
    image(gdImage, this.x, this.y);
  }
}