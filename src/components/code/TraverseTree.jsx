import Code from "./Code";

export default function TraverseTree() {
  return (
    <Code>{`function breadthFirstSearch(
  initialPosition,
  targetPosition
) {
  const queue = [initialPosition]; // initialise the queue
  
  // iterate over queue and make sure current isn't target
  while (
    !(queue[0][0] === targetPosition[0] &&
      queue[0][1] === targetPosition[1])
  ) {
    const currentPosition = queue.shift(); // not target so remove from queue
    const possibleMoves = getPossibleKnightMoves(currentPosition); // get moves
    
    possibleMoves.forEach((move) => {
      queue.push(move); // push move to be examined for target
    });
  }
}`}</Code>
  );
}
