import { useContext } from "react";
import { BoardContext } from "./BoardContext";

export default function useBoard() {
  return useContext(BoardContext);
}
