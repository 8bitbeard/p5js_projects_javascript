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
    line(begginingPoint, 0, begginingPoint, height)
    line(endPoint, 0, endPoint, height)
  }

  placePiece(myPiece) {
    myPiece.shape.reduce( (z, row) => z.concat(row.filter( col => col != null)), []).forEach( box => this.platform[box.y / boxDimension][box.x / boxDimension] = box)
  }

  piecesColliding(piece, collisionfn = (rect1, rect2) => rectCollision(rect1, rect2)) {
    let boxes = piece.shape.reduce( (z, row) => z.concat(row.filter( col => col != null)), [])
    let piecesInsidePlatform = this.platform.reduce( (z, row) => z.concat(row.filter( col => col != null)), [])

    return boxes.reduce( (z, box) => piecesInsidePlatform.filter( p => collisionfn(box, p)).length > 0 ? true : z, false)
  }

  showEmptyBox(x, y) {
    let {r, g, b} = this.color;
    // fill(backgroundColor);
    stroke(r, g, b);
    // rect(x * this.w, y * this.w, this.w, this.w);
    fill(backgroundColor);
  }

  cleanFilledRows() {
    let value = 0;
    let preBoxes = this.countBoxes()
    this.platform.forEach( (row, i) => {
      if (row.every( box => box != null)) {
        row.forEach( (element, j) => this.platform[i][j] = null)
      }
    })
    let postBoxes = this.countBoxes()
    preBoxes != postBoxes ? value += preBoxes - postBoxes : value
    console.log(value)
    // return value;
  }

  countBoxes() {
    return this.platform.reduce( (z, row) => z + row.filter(element => element != null).length, 0)
  }
}