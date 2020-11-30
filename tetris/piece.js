class Piece {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.type = floor(random(6));

    this.models = {
      0: [
        [
          [1, 1],
          [1, 1]
        ]
      ],
      1: [
        [
          [1, 1, 0],
          [0, 1, 1]
        ], [
          [0, 1],
          [1, 1],
          [1, 0],
        ]
      ],
      2: [
        [
          [0, 1, 1],
          [1, 1, 0],
        ], [
          [1, 0],
          [1, 1],
          [0, 1],
        ]
      ],
      3: [
        [
          [1],
          [1],
          [1],
          [1]
        ], [
          [1, 1, 1, 1],
        ]
      ],
      4: [
        [
          [1, 1, 1],
          [0, 0, 1],
        ], [
          [0, 1],
          [0, 1],
          [1, 1],
        ], [
          [1, 0, 0],
          [1, 1, 1],
        ], [
          [1, 1],
          [1, 0],
          [1, 0],
        ]
      ],
      5: [
        [
          [1, 1, 1],
          [1, 0, 0],
        ], [
          [1, 1],
          [0, 1],
          [0, 1],
        ], [
          [0, 0, 1],
          [1, 1, 1],
        ], [
          [1, 0],
          [1, 0],
          [1, 1],
        ]
      ],
      6: [
        [
          [0, 1, 0],
          [1, 1, 1],
        ], [
          [1, 0],
          [1, 1],
          [1, 0],
        ], [
          [1, 1, 1],
          [0, 1, 0],
        ], [
          [0, 1],
          [1, 1],
          [0, 1],
        ]
      ]
    }
    this.model = this.models[this.type][0]
    console.log(this.model)
  }

  update(list) {
    let x = this.x
    let y = this.y + 1
    if (this.y + 1 + this.model[0].length < 20 && list[this.x][this.y + 1 + this.model.length].empty) {
      for (let i = 0; i < this.model.length; i++) {
        for (let j = 0; j < this.model[0].length; j++) {
          list[i + this.x][j + this.y].empty = true;
        }
      }
      this.y += 1;
    }
  }

  show(list) {
    for (let i = 0; i < this.model.length; i++) {
      for (let j = 0; j < this.model[0].length; j++) {
        if (this.model[i][j] == 1) {
          list[i + this.x][j + this.y].empty = false;
        }
      }
    }
  }
}