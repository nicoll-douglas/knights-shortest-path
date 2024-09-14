import Code from "./Code";

export default function PossibleMoves() {
  return (
    <Code>{`import STEPS from "./steps.js"

export default function getPossibleKnightMoves(position) {
  const [x, y] = position;
  const moves = [];
  // check if move is on the board for each step
  for (let i = 0; i < STEPS.length; i++) {
    const [dx, dy] = STEPS[i];
    const move = [x + dx, y + dy];
    // each coord has to be <= 7 and >= 0
    if (move[0] <= 7 && move[1] <= 7 && move[0] >= 0 && move[1] >= 0) {
      moves.push(move);
    }
  }
  return moves;
}

// e.g getPossibleKnightMoves([0, 0]) would return [[1, 2], [2, 1]]`}</Code>
  );
}
