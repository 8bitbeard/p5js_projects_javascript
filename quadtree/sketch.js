// let qtree;

// function setup() {
//   createCanvas(400, 400);

//   let boundary = new Rectangle(200, 200, 200, 200);
//   qtree = new QuadTree(boundary, 4);
//   for (let i = 0; i < 300; i++) {
//     let x = randomGaussian(width / 2, width / 8);
//     let y = randomGaussian(height / 2, height / 8);
//     let p = new Point(x, y);
//     qtree.insert(p);
//   }
// }

// function draw() {
//   background(0);
//   qtree.show();

//   stroke(0, 255, 0);
//   rectMode(CENTER);
//   let range = new Rectangle(constrain(mouseX, 0, width), constrain(mouseY, 0, height), 25, 25)
//   rect(range.x, range.y, range.w*2, range.h*2);
//   let points = qtree.query(range);
//   for (let p of points) {
//     strokeWeight(4);
//     point(p.x, p.y)
//   }
// }

let particles = [];
let stateValue = true;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle(random(width), random(height))
  }
}

function mousePressed() {
  console.log(stateValue);
  stateValue = !stateValue;
}

function draw() {
  background(0);

  let boundary = new Rectangle(300, 200, 600, 400);
  let qtree = new QuadTree(boundary, 4)

  for (let p of particles) {
    let point = new Point(p.x, p.y, p)
    qtree.insert(point);

    p.move();
    p.render();
    p.setHighlight(false);
  }

  if (stateValue) {
    for(let p of particles) {
      let range = new Circle(p.x, p.y, p.r*2);
      let points = qtree.query(range);
      for(let point of points) {
        let other = point.userData;
        if (p !== other && p.intersects(other)) {
          p.setHighlight(true);
        }
      }
    }
  } else {
    for(let p of particles) {
      for(let other of particles) {
        if (p !== other && p.intersects(other)) {
          p.setHighlight(true);
        }
      }
    }
  }

}