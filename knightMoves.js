export function knightMoves(start, end) {
  let board = buildBoard();
}
let possibleMoves = [
  [-2, -1],
  [-2, 1],
  [2, -1],
  [2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
];
export function buildBoard() {
  let arr = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      arr.push([x, y]);
    }
  }
  return arr;
}
