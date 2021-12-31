import Head from "next/head";
import { Box } from "@chakra-ui/react";


import { Footer } from "./Footer";
import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

const Layout = ({ children} :any) => {
  return (
    <>
      <Head>
        <title>Title</title>
      </Head>
      <Box  m="auto">
       
        <main>{children}</main>
         <Navbar /> 
       
      </Box>
    </>
  );
};

export default Layout;
