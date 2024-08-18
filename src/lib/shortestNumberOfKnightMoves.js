import getPossibleKnightMoves from "./getPossibleKnightMoves";

export default function shortestNumberOfKnightMoves(
  initialPosition,
  targetPosition
) {
  const movesCounter = {}; // initialise move counter
  movesCounter[initialPosition.toString()] = 0; // initial to initial is 0
  const pathRecorder = {}; // initialise object to record path to target
  pathRecorder[initialPosition.toString()] = [initialPosition]; // path starts from initialPosition

  const queue = [initialPosition]; // queue to simulate breadth-first search
  // check if current position is the target
  while (
    !(queue[0][0] === targetPosition[0] && queue[0][1] === targetPosition[1])
  ) {
    const currentPosition = queue.shift(); // remove from queue since it isn't
    const possibleMoves = getPossibleKnightMoves(currentPosition); // get possible moves

    possibleMoves.forEach((move) => {
      if (move.toString() in movesCounter) return; // means move was traversed, so return since shorter path was found
      queue.push(move); // push move to queue to be examined whether it is the target

      movesCounter[move.toString()] =
        movesCounter[currentPosition.toString()] + 1; // update move counter, no. of moves to possible is current plus 1

      pathRecorder[move.toString()] = [
        ...pathRecorder[currentPosition.toString()],
        move,
      ]; // update path record, path to possible move is path to current + position of move
    });
  }

  return {
    moves: movesCounter[targetPosition.toString()],
    path: pathRecorder[targetPosition.toString()],
  }; // when loop finishes traversing, target position data is registered with shortest in mind
}
