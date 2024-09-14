import Code from "./Code";

export default function NumberOfMoves() {
  return (
    <Code>{`import getPossibleKnightMoves from "./getPossibleKnightMoves"
      
function shortestNumberOfKnightMoves(
  initialPosition,
  targetPosition
) {
  const movesCounter = {}; // initialise move counter
  movesCounter[initialPosition.toString()] = 0; // no. of moves from initial to initial is 0

  const queue = [initialPosition]; // initialise the queue

  // iterate over queue and make sure current isn't target
  while (
    !(queue[0][0] === targetPosition[0] &&
      queue[0][1] === targetPosition[1])
  ) {
    const currentPosition = queue.shift(); // not target so remove from queue
    const possibleMoves = getPossibleKnightMoves(currentPosition); // get moves

    possibleMoves.forEach((move) => {
      if (move.toString() in movesCounter) return; // avoid traversing again
      queue.push(move); // push move to be examined for target

      // no. of moves to possible is moves to current plus 1
      movesCounter[move.toString()] =
        movesCounter[currentPosition.toString()] + 1; 
    });
  }

  return movesCounter[targetPosition.toString()];
}`}</Code>
  );
}
