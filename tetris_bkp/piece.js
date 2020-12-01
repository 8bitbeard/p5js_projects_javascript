class Piece {
  constructor(x, y, cells) {
    this.x = x;
    this.y = y;
    this.cells = cells;

    this.piece = floor(random(7));
    console.log(this.piece)
    this.rotation = 0;

    this.stationaryPiece = false;
    this.hasCurrentPiece = false;

    this.models = {
      0: [
        [
          [1, 1],
          [1, 1]
        ]
      ],
      1: [
        [
          [0, 0, 0],
          [1, 1, 0],
          [0, 1, 1],
        ], [
          [0, 1, 0],
          [1, 1, 0],
          [1, 0, 0],
        ]
      ],
      2: [
        [
          [0, 0, 0],
          [0, 1, 1],
          [1, 1, 0],
        ], [
          [1, 0, 0],
          [1, 1, 0],
          [0, 1, 0],
        ]
      ],
      3: [
        [
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0],
          [1, 0, 0, 0]
        ], [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 1, 1, 1],
        ]
      ],
      4: [
        [
          [0, 0, 0],
          [1, 1, 1],
          [0, 0, 1],
        ], [
          [0, 1, 0],
          [0, 1, 0],
          [1, 1, 0],
        ], [
          [0, 0, 0],
          [1, 0, 0],
          [1, 1, 1],
        ], [
          [1, 1, 0],
          [1, 0, 0],
          [1, 0, 0],
        ]
      ],
      5: [
        [
          [0, 0, 0],
          [1, 1, 1],
          [1, 0, 0],
        ], [
          [1, 1, 0],
          [0, 1, 0],
          [0, 1, 0],
        ], [
          [0, 0, 0],
          [0, 0, 1],
          [1, 1, 1],
        ], [
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 0],
        ]
      ],
      6: [
        [
          [0, 0, 0],
          [0, 1, 0],
          [1, 1, 1],
        ], [
          [1, 0, 0],
          [1, 1, 0],
          [1, 0, 0],
        ], [
          [0, 0, 0],
          [1, 1, 1],
          [0, 1, 0],
        ], [
          [0, 1, 0],
          [1, 1, 0],
          [0, 1, 0],
        ]
      ]
    }
    this.model = this.models[this.piece][this.rotation]
    console.log(this.model)
  }

  rotate(direction) {
    this.rotation += direction
    if (this.rotation < 0) {
      this.rotation = this.models[this.piece].length - 1
    }
    this.rotation = this.rotation % (this.models[this.piece].length)
    this.model = this.models[this.piece][this.rotation]
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  // update() {
  //   for (let i = 0; i < this.cols; i++) {
  //     for (let j = 0; j < this.rows; j++) {
  //       this.cells[i][j].empty = true;
  //     }
  //   }
  // }



    // if (!this.resting) {
    //   if (this.y + this.model[0].length < 20 && this.cells[this.x][this.y + this.model[0].length].empty) {
    //     for (let i = 0; i < this.model.length; i++) {
    //       for (let j = 0; j < this.model[0].length; j++) {
    //         this.cells[i + this.x][j + this.y].empty = true;
    //       }
    //     }
    //     // this.y += 1;
    //   }
    // }
  // }

  show() {
    // console.log(this.y);
    for (let i = 0; i < this.model[0].length; i++) {
      for (let j = 0; j < this.model.length; j++) {
        if (this.model[j][i] == 1) {
          this.cells[i + this.x][j + this.y].empty = false;
          this.cells[i + this.x][j + this.y].hasPiece = true;
        }
      }
    }
  }
}