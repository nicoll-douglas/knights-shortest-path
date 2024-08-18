import { createContext, useState } from "react";

const BoardContext = createContext();

function BoardProvider({ children }) {
  const [knightPosition, setKnightPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [moves, setMoves] = useState(null);
  const [path, setPath] = useState(null);

  return (
    <BoardContext.Provider
      value={{
        knightPosition,
        setKnightPosition,
        targetPosition,
        setTargetPosition,
        moves,
        setMoves,
        path,
        setPath,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export { BoardContext, BoardProvider };
