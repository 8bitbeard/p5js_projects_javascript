var displayNumbers = [];
var displayOne;
var displayTwo;

function preload() {
  for (var i = 0; i <= 10; i++) {
    displayNumbers[i] = loadImage(`images/number_${i}.png`)
  }
}

function setup () {
  createCanvas(300, 100);
  displayOne = new Display(10, 10, 30, 60);
  displayOne.setValue(-27)
  displayTwo = new Display(200, 10, 30, 60);
  displayTwo.setValue(356)
}
function draw() {
  background(51);
  displayOne.show();
  displayTwo.show();
}
