class Field {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 405;
  }

  make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  gameArea() {
    var grid = this.make2DArray(20, 20);
    for (var i = 0; i < 20; i ++) {
      for (var j = 0; j < 20; j++) {
        grid[i][j] = createVector()
      }
    }
    return createVector(this.x + 2, this.y + 2)
  }

  show() {
    fill(0);
    stroke(0, 255, 0);
    strokeWeight(2);
    rect(this.x, this.y, this.w, this.w);
  }
}
