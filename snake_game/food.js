class Food {

  constructor(field) {
    this.w = 20;
    this.x = floor(random(20)) * 20 + field.x + 2;
    this.y = floor(random(20)) * 20 + field.y + 2;
  }

  spawn(field, snake) {
    let x = floor(random(20)) * 20 + field.x + 2;
    let y = floor(random(20)) * 20 + field.y + 2;
    let vector = createVector(x, y);
    while (snake.contains(vector)) {
      x = floor(random(20)) * 20 + field.x + 2;
      y = floor(random(20)) * 20 + field.y + 2;
      vector = createVector(x, y);
    }
    this.x = x;
    this.y = y;
  }

  show() {
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.w, this.w);
  }
}
