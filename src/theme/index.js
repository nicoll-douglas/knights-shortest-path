import { extendTheme, withDefaultColorScheme } from "@chakra-ui/theme-utils";
import styles from "./styles";

const theme = extendTheme(
  {
    styles,
  },
  withDefaultColorScheme({ colorScheme: "orange" })
);

export default theme;
