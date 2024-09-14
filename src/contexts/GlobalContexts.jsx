import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../theme";
import { BoardProvider } from "./BoardContext";

export default function GlobalContexts({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <BoardProvider>{children}</BoardProvider>
    </ChakraProvider>
  );
}
