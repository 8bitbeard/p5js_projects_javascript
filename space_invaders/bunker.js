class Bunker {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 3

    this.model = [
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    ]
  }

  hits(object) {
    var x = floor((object.x + 2 - this.x) / this.w) - 1;
    // console.log(x)
    for (var i = 0; i < this.model.length; i++) {
      for (var j = 0; j < this.model[0].length; j++) {
        if (j == x) {
          this.model[i][j] = 0;
        }
      }
    }
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

  update() {

  }

  show() {
    this.render()
  }
}
