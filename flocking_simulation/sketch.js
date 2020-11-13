const boids = [];

let alignSlider, cohesionSlider, separationSlider;

function setup() {
  createCanvas(640, 360);
  alignmentSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  separationSlider = createSlider(0, 5, 1, 0.1);
  for (var i = 0; i < 3; i++) {
    boids.push(new Boid());
  }
}

function draw() {
  background(51);

  for(let boid of boids) {
    boid.edges();
    boid.flock(boids);
    boid.update();
    boid.show();
  }
}
