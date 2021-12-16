import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";


export const Navbar = () => {
    
    return (
      <Box height={20}>
        <Text> Logo</Text>
        <Spacer />
        <Flex boxSize="sm">
          <Image
            src="/public/login.svg"
            alt="Dan Abramov"
            width="200"
            height="200"
          />
        </Flex>
        <Text>Log In</Text>
        <Text>/Signup</Text>
      </Box>
    );
}



