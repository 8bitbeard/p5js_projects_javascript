const canvasWidth = 600;
const canvasHeight = 600;

const begginingPoint = 150;
const endPoint = 450;

const backgroundColor = 0;

const boxDimension = 30;

const collisionMargin = 2;

const timer = 500;

const singleLineScore = 100;

const previewPiecesNumber = 1;

const piece_O = {
  "shape": [
    [1, 1],
    [1, 1]
  ],
  "model": [[0,0], [2, 0], [2, 2], [0, 2]],
  "color": {
    r: 255,
    g: 255,
    b: 0,
  }
};

const piece_I = {
  "shape": [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  "model": [[0,0], [4, 0], [4, 1], [0, 1]],
  "color": {
    r: 0,
    g: 255,
    b: 255,
  }
}

const piece_S = {
  "shape": [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0]
  ],
  "model": [[0,1], [1, 1], [1, 0], [3, 0], [3, 1], [2, 1], [2, 2], [0,2]],
  "color": {
    r: 0,
    g: 255,
    b: 0,
  }
}

const piece_Z = {
  "shape" : [
    [0, 0, 0],
    [1, 1, 0],
    [0, 1, 1]
  ],
  "model": [[0,0], [2, 0], [2, 1], [3, 1], [3, 2], [1, 2], [1, 1], [0,1]],
  "color": {
    r: 255,
    g: 0,
    b: 0,
  }
}

const piece_L = {
  "shape": [
    [0, 0, 0],
    [1, 1, 1],
    [1, 0, 0],
  ],
  "model": [[0,0], [3, 0], [3, 1], [1, 1], [1, 2], [0, 2]],
  "color": {
    r: 255,
    g: 165,
    b: 0,
  }
}

const piece_J = {
  "shape": [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1]
  ],
  "model": [[0,0], [3, 0], [3, 2], [2, 2], [2, 1], [0, 1]],
  "color": {
    r: 0,
    g: 0,
    b: 255
  }
}

const piece_T = {
  "shape": [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ],
  "model": [[0,0], [3, 0], [3, 1], [2, 1], [2, 2], [1, 2], [1, 1], [0, 1]],
  "color": {
    r: 128,
    g: 0,
    b: 128
  }
}

const pieces = [piece_O, piece_I, piece_S, piece_Z, piece_L, piece_J, piece_T];