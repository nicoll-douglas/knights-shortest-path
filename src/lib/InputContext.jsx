import { createContext, useState } from "react";

const InputContext = createContext();

function InputProvider({ children }) {
  const [knightPosition, setKnightPosition] = useState(null);
  const [targetPosition, setTargetPosition] = useState(null);
  const [moves, setMoves] = useState(null);
  const [path, setPath] = useState(null);

  return (
    <InputContext.Provider
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
    </InputContext.Provider>
  );
}

export { InputContext, InputProvider };
