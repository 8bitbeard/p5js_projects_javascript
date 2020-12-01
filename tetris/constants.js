const canvasWidth = 400;
const canvasHeight = 600;
const backgroundColor = 50;

const boxDimension = 30;

const timer = 500;

const piece_O = [
  [1, 1],
  [1, 1]
];

const piece_I = [
  [1, null, null, null],
  [1, null, null, null],
  [1, null, null, null],
  [1, null, null, null]
];

const piece_S = [
  [null, null, null],
  [null, 1   , 1   ],
  [1   , 1   , null]
];

const piece_Z = [
  [null, null, null],
  [1   , 1   , null],
  [null, 1   , 1   ]
];


const piece_L = [
  [1, null, null],
  [1, null, null],
  [1, 1   , null],

]

const piece_J = [
  [null, 1, null],
  [null, 1, null],
  [1   , 1, null]
]

const piece_T = [
  [null, null, null],
  [1   , 1   , 1   ],
  [null, 1   , null]
]