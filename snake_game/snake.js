class Snake {
  constructor(field) {
    this.w = 20;
    this.body = [];
    this.body[0] = field.gameArea();
    this.xdir = 1;
    this.ydir = 0;
    this.dead = false;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy()
    this.body.shift();
    head.x += this.xdir * this.w;
    head.y += this.ydir * this.w;
    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy()
    this.body.push(head);
  }

  contains(vector) {
    for (let i = 0; i < this.body.length; i++) {
      if (this.body[i] == vector) {
        return true;
      }
    }
  }

  hits(field) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x > field.x + field.w - this.w || x < field.x || y > field.y + field.w - this.w || y < field.y) {
      this.dead = true;
    }
    for (let i = 0; i < this.body.length - 1; i++) {
      let part = this.body[i];
      if (part.x == x && part.y == y) {
        this.dead = true;
      }
    }
  }

  eat(food) {
    let x = this.body[this.body.length - 1].x;
    let y = this.body[this.body.length - 1].y;
    if (x == food.x && y == food.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0, 255, 0);
      stroke(0);
      strokeWeight(1);
      rect(this.body[i].x, this.body[i].y, this.w, this.w);
    }
  }
}
