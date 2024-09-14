import { createContext, useState } from "react";
import { shortestNumberOfKnightMoves } from "../lib";

const BoardContext = createContext();

function BoardProvider({ children }) {
  const [knightPosition, setKnightPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [moves, setMoves] = useState(null);
  const [path, setPath] = useState(null);

  function clearBoard() {
    setTargetPosition(null);
    setKnightPosition(null);
    setPath(null);
    setMoves(null);
  }

  function isTarget(row, col) {
    return (
      targetPosition && row === targetPosition[0] && col === targetPosition[1]
    );
  }

  function isKnight(row, col) {
    return (
      knightPosition && row === knightPosition[0] && col === knightPosition[1]
    );
  }

  function placeKnight(row, col) {
    if (path) setPath(null);
    if (isTarget(row, col)) setTargetPosition(null);
    if (isKnight(row, col)) return setKnightPosition(null);
    setKnightPosition([row, col]);
  }

  function placeTarget(row, col) {
    if (path) setPath(null);
    if (isKnight(row, col)) setKnightPosition(null);
    if (isTarget(row, col)) return setTargetPosition(null);
    setTargetPosition([row, col]);
  }

  function displaySolution() {
    const { moves: result, path: resultingPath } = shortestNumberOfKnightMoves(
      knightPosition,
      targetPosition
    );
    setPath(resultingPath);
    setMoves(result);
  }

  return (
    <BoardContext.Provider
      value={{
        knightPosition,
        targetPosition,
        moves,
        path,
        displaySolution,
        placeKnight,
        placeTarget,
        clearBoard,
        isTarget,
        isKnight,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider };
