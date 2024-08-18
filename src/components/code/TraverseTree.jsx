import Code from "./Code";

export default function TraverseTree() {
  return (
    <Code>{`function breadthFirstSearch(
  initialPosition,
  targetPosition
) {
  // initialise the tree/queue with the first position
  const queue = [initialPosition]; 
  
  // iterate over queue and check if current position is target
  while (
    !(queue[0][0] === targetPosition[0] &&
      queue[0][1] === targetPosition[1])
  ) {
    const currentPosition = queue.shift(); // not target so remove from queue
    const possibleMoves = getPossibleKnightMoves(currentPosition); // get moves
    
    possibleMoves.forEach((move) => {
      queue.push(move); // push moves to queue to be examined
    });
  }
}`}</Code>
  );
}
