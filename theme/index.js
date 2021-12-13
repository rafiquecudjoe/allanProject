// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#161718",
      200: "#dbdbdb",
      300: "#767676",
      400: "#c2c2c2",
      500: "#161718",
    },
  },
});
