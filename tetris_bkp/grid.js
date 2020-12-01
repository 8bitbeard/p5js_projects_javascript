class Grid {
  constructor(cells, x, y, w) {

    this.cells = cells

    this.x = x;
    this.y = y;
    this.w = w;

    this.rows = this.cells[0].length;
    this.cols = this.cells.length;

    this.piece;

    // this.w = 22;
    // this.x = width/2 - (this.cols * this.w) / 2;
    // this.y = height/2 - (this.rows * this.w) / 2;
    // this.cells = this.make2DArray(rows, cols);
    // this.initialize();

  }

  clearGrid() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j].piece = false;
      }
    }
  }

  spawnPiece() {
    this.piece = new Piece(4, 0, this.cells);
    this.piece.show();
  }

  movePiece(x, y) {

  }

  shiftPieceDown() {
    let hasSpace = true;
    let nextPos = this.piece.y + this.piece.model.length
    for (let i = 0; i < this.piece.model[0].length; i++) {
      if (nextPos < this.rows) {
        console.log(this.cells[i + this.piece.x][nextPos].empty, this.piece.model[this.piece.model.length - 1][i])
        if (!this.cells[i + this.piece.x][nextPos].empty && this.piece.model[i][this.piece.model.length - 1] == 1) {
          hasSpace = false;
          break;
        }
      } else {
        hasSpace = false;
        break;
      }
    }
    if (hasSpace) {
      this.piece.y += 1;
    } else {
      for (let i = 0; i < this.piece.model[0].length; i++) {
        for (let j = 0; j < this.piece.model.length; j++) {
          if (this.piece.model[j][i] == 1) {
            this.cells[i + this.piece.x][j + this.piece.y].stationaryPiece = true;
          }
        }
      }
    }
  }

  rotatePiece(direction) {
    this.piece.rotate(direction);
  }

  update() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (!this.cells[i][j].stationaryPiece) {
          this.cells[i][j].empty = true;
        }
      }
    }
    if (this.piece) {
      this.shiftPieceDown();
      this.piece.show();
    }
  }

  show() {
    // push();
    // stroke(170);
    // strokeWeight(1);
    // for (let i = 0; i <= this.cols; i++) {
    //   for (let j = 0; j <= this.rows; j++) {
    //     line((i * this.w) + this.x, this.y, (i * this.w) + this.x, (this.rows * this.w) + this.y);
    //     line(this.x , (j * this.w) + this.y, (this.cols * this.w) + this.x, (j * this.w) + this.y);
    //   }
    // }
    // pop();
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j].show();
      }
    }
  }
}