class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.w = 22;
    this.x = width/2 - (this.cols * this.w) / 2;
    this.y = height/2 - (this.rows * this.w) / 2;
    this.cells = this.make2DArray(rows, cols);
    this.initialize();

    this.piece;
  }

  initialize() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let x = i * this.w + this.w/2 + this.x;
        let y = j * this.w + this.w/2 + this.y;
        this.cells[i][j] = new Cell(x, y, this.w);
      }
    }
  }

  make2DArray(cols, rows) {
    let arr = new Array(rows);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols);
    }
    return arr;
  }

  clearGrid() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j].piece = false;
      }
    }
  }

  spawnPiece() {
    this.clearGrid();
    this.piece = new Piece(2, 3);
    this.piece.show(this.cells);
  }

  rotatePiece() {
  }

  update() {
    if (this.piece) {
      this.piece.update(this.cells);
      this.piece.show(this.cells);
    }
  }

  show() {
    push();
    stroke(170);
    strokeWeight(1);
    for (let i = 0; i <= this.cols; i++) {
      for (let j = 0; j <= this.rows; j++) {
        line((i * this.w) + this.x, this.y, (i * this.w) + this.x, (this.rows * this.w) + this.y);
        line(this.x , (j * this.w) + this.y, (this.cols * this.w) + this.x, (j * this.w) + this.y);
      }
    }
    pop();
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        this.cells[i][j].show();
      }
    }
  }
}