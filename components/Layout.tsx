import Head from "next/head";
import { Box } from "@chakra-ui/react";

import { Footer } from "./Footer";

const Layout = ({ children} :any) => {
  return (
    <>
      <Head>
        <title>Beacon Homes LLC</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
       
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
