import { ChakraProvider } from "@chakra-ui/provider";
import theme from "./theme/index";
import { InputProvider } from "./lib/InputContext";

export default function Contexts({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <InputProvider>{children}</InputProvider>
    </ChakraProvider>
  );
}
