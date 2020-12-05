const canvasWidth = 600;
const canvasHeight = 600;

const begginingPoint = 150;
const endPoint = 450;

const backgroundColor = 50;

const boxDimension = 30;

const collisionMargin = 2;

const timer = 500;

const singleLineScore = 100;

const piece_O = [
  [1, 1],
  [1, 1]
];

const piece_I = [
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0]
];

const piece_S = [
  [0, 0, 0],
  [0, 1, 1],
  [1, 1, 0]
];

const piece_Z = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 1, 1]
];

const piece_L = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 1, 0],
];

const piece_J = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 0]
];

const piece_T = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
];

const pieces = [piece_O, piece_I, piece_S, piece_Z, piece_L, piece_J, piece_T];