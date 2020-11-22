class Lives {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 2;

    this.lives = 3

    this.model = [
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ];

  }

  update(value) {
    this.lives += value;
  }

  render(model, x) {
    for (var i = 0; i < model.length; i++) {
      for (var j = 0; j < model[0].length; j++) {
        if (model[i][j] === 1) {
          rect(
            x + (j * this.w),
            this.y + (i * this.w),
            this.w,
            this.w
          )
        }
      }
    }
  }

  show() {
    fill(255);
    stroke(255);
    noStroke();
    textFont(pixelFont);
    textSize(30);
    text(this.lives, this.x, this.y + 15);
    for (var i = 0; i < this.lives; i++) {
      this.render(this.model, 40 + i * 30)
    }
  }
}
