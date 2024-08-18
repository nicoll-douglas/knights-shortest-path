// step vectors a knight can take
const STEPS = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

export default function getPossibleKnightMoves(position) {
  // position of knight on the board, coord range is 0-7
  const [x, y] = position;
  const moves = [];
  for (let i = 0; i < STEPS.length; i++) {
    const [dx, dy] = STEPS[i];
    const move = [x + dx, y + dy];
    if (move[0] <= 7 && move[1] <= 7 && move[0] >= 0 && move[1] >= 0) {
      // if on board, push to moves
      moves.push(move);
    }
  }
  return moves;
}
