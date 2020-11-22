class Bunker {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 3

    this.model = [
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ];

    this.explosion = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 0],
    ];

    this.structure = make2DArray(this.model.length, this.model[0].length)
    for (var i = 0; i < this.structure.length; i++) {
      for (var j = 0; j < this.structure.length; j++) {
        var z;
        if (this.model[i][j] == 1) {
          z = 1;
        } else {
          z = -1;
        }
        this.structure[i][j] = createVector(this.x + i * this.w, this.y + j * this.w, z)
      }
    }
  }

  make2DArray(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  getStructurePoint(point) {
    var x = floor((point.x - this.x) / this.w)
    var y = floor((point.y - this.y) / this.w)
    return (this.model[y][x] === 1)
  }

  getModelPoint(point) {
    var x = ceil((point.x - this.x) / this.w)
    var y = ceil((point.y - this.y) / this.w)
    var modelPoint = createVector(x, y);
    return (modelPoint)
  }

  isBetween(value, x, y) {
    return (value[0] >= x && value[0] <= y)
  }

  matrixOverlap(arrOne, arrTwo, point, direction) {
    var x = constrain(floor((point.x - this.x) / this.w), 0, arrTwo[0].length)
    var horizontalFilter = [[x - 2, 0], [x - 1, 1], [x, 2], [x + 1, 3], [x + 2], 4].filter(x => this.isBetween(x, 0, arrTwo[0].length))
    var modelPoint = this.getModelPoint(point)

    // Ships laser
    if (direction < 0) {
      for (var i = arrOne.length - 1; i >= 0; i--) {
        for(var j = 0; j < horizontalFilter.length; j++) {
          if (arrOne[i][j] == 1) {
            arrTwo[constrain(modelPoint.y - i , 0, arrTwo.length - 1)][horizontalFilter[j][0]] = 0;
          }
        }
      }
    } else { // Aliens Laser
      var arr = arrOne.reverse();
      arrOne.reverse();
      for (var i = 0; i < arr.length; i++ ){
        for(var j = 0; j < horizontalFilter.length; j++) {
          if (arr[i][j] == 1) {
            arrTwo[constrain(modelPoint.y + i - 2, 0, arrTwo.length- 1)][horizontalFilter[j][0]] = 0;
          }
        }
      }
    }
  }

  hits(object) {
    this.matrixOverlap(this.explosion, this.model, object.center, object.yspeed)
  }

  render() {
    for (var i = 0; i < this.model.length; i++) {
      for (var j = 0; j < this.model[0].length; j++) {
        if (this.model[i][j] === 1) {
          fill(255, 0, 0);
          rect(
            this.x + (j * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  show() {
    this.render()
  }
}
