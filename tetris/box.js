class Box {
  constructor(x = 0, y = 0, w = boxDimension, color = {r: 0, g: 0, b: 0}) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.color = color;
  }

  show() {
    let {r, g, b} = this.color;
    stroke(255);
    fill(r, g, b);
    rect(this.x, this.y, this.w, this.w)
  }
}