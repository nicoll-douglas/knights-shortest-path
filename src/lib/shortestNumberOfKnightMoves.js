import getPossibleKnightMoves from "./getPossibleKnightMoves";

export default function shortestNumberOfKnightMoves(
  initialPosition,
  targetPosition
) {
  const movesCounter = {};
  movesCounter[initialPosition.toString()] = 0;
  const pathRecorder = {};
  pathRecorder[initialPosition.toString()] = [initialPosition];

  const queue = [initialPosition];
  while (
    !(queue[0][0] === targetPosition[0] && queue[0][1] === targetPosition[1])
  ) {
    const currentPosition = queue.shift();
    const possibleMoves = getPossibleKnightMoves(currentPosition);

    possibleMoves.forEach((move) => {
      if (move.toString() in movesCounter) return;
      queue.push(move);

      movesCounter[move.toString()] =
        movesCounter[currentPosition.toString()] + 1;

      pathRecorder[move.toString()] = [
        ...pathRecorder[currentPosition.toString()],
        move,
      ];
    });
  }

  return {
    moves: movesCounter[targetPosition.toString()],
    path: pathRecorder[targetPosition.toString()],
  };
}
