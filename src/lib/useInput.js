import { useContext } from "react";
import { InputContext } from "./InputContext";

export default function useInput() {
  return useContext(InputContext);
}
