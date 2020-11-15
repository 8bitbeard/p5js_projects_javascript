class Cell {

  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.neighborCount = 0;

    this.bee = false;
    this.revealed = false;
    this.flagged = 0;
  }

  countBees() {
    if (this.bee) {
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
          if (neighbor.bee) {
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
          if (!neighbor.bee && !neighbor.revealed) {
            neighbor.reveal();
          }
        }
      }
    }
  }

  show() {
    // stroke(0);
    // noFill();
    // rect(this.x, this.y, this.w, this.w)
    image(normalCell, this.x, this.y, this.w, this.w);
    if (this.revealed) {
      if (this.bee) {
        // fill(127);
        // ellipse(this.x + this.w * 0.5 , this.y + this.w * 0.5, this.w * 0.5)
        image(bombInactive, this.x, this.y, this.w, this.w);
      } else {
        image(numberCells[this.neighborCount], this.x, this.y, this.w, this.w);
        // fill(200);
        // rect(this.x, this.y, this.w, this.w)
        // if (this.neighborCount > 0) {
        //   image(numberCells[this.neighborCount], this.x, this.y, this.w, this.w);
        //   textAlign(CENTER);
        //   fill(0);
        //   text(this.neighborCount, this.x + this.w  * 0.5, this.y + this.w - 5);
        // }
      }
    }
    if (this.flagged === 1) {
      image(flaggedCell, this.x, this.y, this.w, this.w);
      // fill(255);
      // rect(this.x, this.y, this.w, this.w)
      // textAlign(CENTER);
      // fill(255, 0, 0);
      // text("X", this.x + this.w  * 0.5, this.y + this.w - 5);
    } else if (this.flagged === 2) {
      image(questionCell, this.x, this.y, this.w, this.w);
      // fill(255);
      // rect(this.x, this.y, this.w, this.w)
      // textAlign(CENTER);
      // fill(0, 0, 255);
      // text("?", this.x + this.w  * 0.5, this.y + this.w - 5);
    }
  }
}
