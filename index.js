// import { knightMoves } from './knightMoves.js';
// import { buildBoard } from './knightMoves.js';

function createBoard(n) {
  console.log('hi');
  return Array.from({ length: n }, () => Array(n).fill(false));
}

// x must be equal or greater than 0 but smaller than board size
// y must be equal or greater than 0 but smaller than board size
function isValidMove(x, y, n) {
  return x >= 0 && x < n && y >= 0 && y < n;
}
