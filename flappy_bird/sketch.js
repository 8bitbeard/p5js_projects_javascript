var bird;
var pipes = [];

// function preload() {
//   spritedata = loadJSON('assets/spritesheet_data.json');
//   spritesheet = loadImage('assets/spritesheet.png');
// }

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipe = new Pipe();
}

function keyPressed() {
  if (key == ' ') {
    bird.flap();
  }
}

function draw() {
  background(0);
  bird.edge();
  bird.update();
  bird.show();

  if (frameCount % 80 == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();
    pipes[i].show();
    if (bird.hits(pipes[i])) {
      console.log('HITS')
    }
    if (pipes[i].edge()) {
      pipes.splice(i, 1);
    }
  }
}