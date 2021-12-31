import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import { ChakraProvider } from "@chakra-ui/provider";
import type { AppProps } from "next/app";
import { theme } from "../theme/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
