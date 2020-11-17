class Interface {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 545;
    this.h = 622;
  }

  show() {
    image(field, this.x, this.y, this.w , this.h);
  }
}