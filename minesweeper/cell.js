class Cell {

  constructor(i, j, w) {
    this.xoffset = 25;
    this.yoffset = 105;
    this.i = i;
    this.j = j;
    this.x = (i * w) + this.xoffset;
    this.y = (j * w) + this.yoffset;
    this.w = w;
    this.neighborCount = 0;

    this.bomb = false;
    this.revealed = false;
    this.activated = false;
    this.pressed = false;
    this.flagged = 0;
  }

  countBombs() {
    if (this.bomb) {
      this.neighborCount = -1;
      return;
    }
    var total = 0;
    for (var xoff = -1; xoff <= 1; xoff++) {
      for (var yoff = -1; yoff <= 1; yoff++) {
        var i = this.i + xoff;
        var j = this.j + yoff;
        if (i > -1 && i < cols && j > -1 && j < rows) {
          var neighbor = grid[i][j];
          if (neighbor.bomb) {
            total++;
          }
        }
      }
    }
    this.neighborCount = total;
  }

  contains(x, y) {
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }

  reveal() {
    this.revealed = true;
    this.flagged = false;
    if (this.neighborCount == 0) {
      this.floodFill();
    }
  }

  mark() {
    this.flagged = (this.flagged + 1) % 3;
  }

  floodFill() {
    for (var xoff = -1; xoff <= 1; xoff++) {
      for (var yoff = -1; yoff <= 1; yoff++) {
        var i = this.i + xoff;
        var j = this.j + yoff;
        if (i > -1 && i < cols && j > -1 && j < rows) {
          var neighbor = grid[i][j];
          if (!neighbor.bomb && !neighbor.revealed) {
            neighbor.reveal();
          }
        }
      }
    }
  }

  show() {
    if (mouseIsPressed && mouseButton === LEFT && this.contains(mouseX, mouseY)) {
      image(numberCells[0], this.x, this.y, this.w, this.w);
    } else {
      image(normalCell, this.x, this.y, this.w, this.w);
    }
    if (this.revealed) {
      if (this.bomb && this.activated) {
        image(bombActive, this.x, this.y, this.w, this.w);
      } else if (this.bomb) {
        image(bombInactive, this.x, this.y, this.w, this.w);
      } else {
        image(numberCells[this.neighborCount], this.x, this.y, this.w, this.w);
      }
    }
    if (this.flagged === 1) {
      image(flaggedCell, this.x, this.y, this.w, this.w);
    } else if (this.flagged === 2) {
      image(questionCell, this.x, this.y, this.w, this.w);
    }
  }
}
