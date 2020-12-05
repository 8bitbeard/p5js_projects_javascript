class nextPieceDisplay {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.pieces = []
    this.update();
  }

  update() {
    let times = this.pieces.length
    for (let i = 0; i < previewPiecesNumber - times; i++) {
      let index = Math.floor(Math.random() * pieces.length)
      this.pieces.push(pieces[index]);
    }
  }

  getNextPiece() {
    let nextPiece = this.pieces.shift();
    this.update();
    return nextPiece;
  }

  show() {
    this.pieces.forEach( (piece, index) => {
      push()
      beginShape()
      let {r, g, b} = piece.color
      fill(r, g, b)
      stroke(r, g, b)
      for (let point of piece.model) {
        vertex(this.x + point[0] * this.w, this.y + 80 * index + point[1] * this.w);
      }
      endShape(CLOSE);
      pop()
    })
  }
}