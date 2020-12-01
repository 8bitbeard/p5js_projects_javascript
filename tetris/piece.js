class Piece {
  constructor(originalShape = [[]], x = 0, y = 0, color = {r: 0, g: 0, b: 0}) {
    this.originalShape = originalShape;
    this.x = x;
    this.y = y;
    this.color = color;
    this.shape = this.fillPiece(originalShape.length);
  }

  fillPiece(pieceLength) {
    return Array.from( new Array(pieceLength), (row, i) =>
           Array.from( new Array(pieceLength), (col, j) =>
           this.originalShape[i][j] == 1 ? new Box(this.x + j * boxDimension, this.y + i * boxDimension, boxDimension, this.color) : null)
    )
  }

  updatePiecePosition() {
    this.shape.forEach( (row, i) => row.forEach( (col, j) => {
      if (col) {
        col.x = this.x + j * boxDimension;
        col.y = this.y + i * boxDimension;
      }
    }))
  }

  show() {
    this.updatePiecePosition();
    this.shape.forEach( x => x.filter( j => j != null).forEach(box => box.show()))
  }
}