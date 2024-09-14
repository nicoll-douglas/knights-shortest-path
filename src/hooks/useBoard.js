import { BoardContext } from "../contexts";
import { useContext } from "react";

export default function useBoard() {
  return useContext(BoardContext);
}
