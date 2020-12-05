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

  drawPieceModel(piece, index) {
    push()
    beginShape()
    let {r, g, b} = piece.color
    fill(r, g, b)
    stroke(r, g, b)
    for (let point of piece.model) {
      vertex(this.x - piece.shape[0].length * this.w / 2 + point[0] * this.w, 20 + this.y + 80 * index + point[1] * this.w);
    }
    endShape(CLOSE);
    pop()
  }

  show() {
    textSize(16);
    textAlign(CENTER);
    fill(255)
    text("NEXT PIECE", this.x, this.y)
    this.pieces.forEach( (piece, index) => this.drawPieceModel(piece, index) )
  }
}