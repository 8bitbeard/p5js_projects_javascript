class Platform {
  constructor(platform = [[]], x = 0, y = 0, w = boxDimension, color = {r: 255, g: 255, b: 255}) {
    this.platform = platform;
    this.x = x;
    this.y = y;
    this.w = w;
    this.color = color;
    this.generatePlatform();
  }

  generatePlatform() {
    let platformWidth = canvasWidth / this.w;
    let platformHeight = canvasHeight / this.w;
    this.platform = Array.from( new Array(platformHeight), row =>
                    Array.from( new Array(platformWidth), col => null))
  }

  show() {
    this.platform.forEach( (row, i) => row.forEach( (box, j) => box === null ? this.showEmptyBox(j, i) : box.show()));
  }

  placePiece(myPiece) {
    myPiece.shape.reduce( (z, row) => z.concat(row.filter( col => col != null)), []).forEach( box => this.platform[box.y / boxDimension][box.x / boxDimension] = box)
  }

  showEmptyBox(x, y) {
    let {r, g, b} = this.color;
    fill(backgroundColor);
    stroke(r, g, b);
    rect(x * this.w, y * this.w, this.w, this.w);
    fill(backgroundColor);
  }
}