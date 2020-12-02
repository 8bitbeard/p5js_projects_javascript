const canvasWidth = 420;
const canvasHeight = 600;
const begginingPoint = 0;
const backgroundColor = 50;

const boxDimension = 30;

const timer = 500;

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

pieces = [piece_O, piece_S, piece_Z, piece_L, piece_J, piece_T];