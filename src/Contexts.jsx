import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme/index";
import { BoardProvider } from "./lib/BoardContext";

export default function Contexts({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <BoardProvider>{children}</BoardProvider>
    </ChakraProvider>
  );
}
