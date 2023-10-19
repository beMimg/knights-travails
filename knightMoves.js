export class Node {
  constructor(start, end) {
    if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) {
      this.node = null;
    } else {
      this.node = { start, end };
    }
  }
}

export function knightMoves([x, y], [z, j]) {
  let q = [new Node([x, y], [[x, y]])];
  let currentNode = q.shift();

  while (currentNode.node.start[0] !== z || currentNode.node.start[1] !== j) {
    let moves = [
      [currentNode.node.start[0] + 2, currentNode.node.start[1] - 1],
      [currentNode.node.start[0] + 2, currentNode.node.start[1] + 1],
      [currentNode.node.start[0] - 2, currentNode.node.start[1] - 1],
      [currentNode.node.start[0] - 2, currentNode.node.start[1] + 1],
      [currentNode.node.start[0] + 1, currentNode.node.start[1] - 2],
      [currentNode.node.start[0] + 1, currentNode.node.start[1] + 2],
      [currentNode.node.start[0] - 1, currentNode.node.start[1] - 2],
      [currentNode.node.start[0] - 1, currentNode.node.start[1] + 2],
    ];

    moves.forEach((move) => {
      let node = new Node(move, currentNode.node.end.concat([move]));
      if (node.node !== null) {
        q.push(node);
      }
    });
    currentNode = q.shift();
  }

  console.log(
    `=> You made it in ${
      currentNode.node.end.length - 1
    } moves!  Here's your path:`
  );
  currentNode.node.end.forEach((start) => {
    console.log(start);
  });
}
