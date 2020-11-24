var spritesheet;
var spritedata;

var bg;
var pos;

var w = 149 * 2;
var h = 260 * 2;

function preload() {
  spritedata = loadJSON('assets/spritesheet_data.json');
  spritesheet = loadImage('assets/spritesheet.png');
}

function setup() {
  createCanvas(w, h);
  bg = spritesheet.get(3, 0, 143, 255)
  ground = spritesheet.get(215, 10, 143, 55)
  flappyBird = spritesheet.get(152, 200, 89, 25)
  getReady = spritesheet.get(254, 71, 92, 25)
  up = spritesheet.get(388, 43, 19, 26)
  tap = spritesheet.get(370, 74, 57, 18)
}

function draw() {
  image(bg, 0, 0, 300, 520);
  image(ground, 0, 420, 300, 110);
  // image(title, 25, 50);
  image(getReady, 25, 100, 184, 50);
  image(up, 59, 95);
  image(tap, 40, 130);
}