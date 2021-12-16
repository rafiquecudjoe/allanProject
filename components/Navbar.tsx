import React from "react";
import { Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import Image from "next/image";


export const Navbar = () => {
    
    return (
      <Flex
        height={20}
        bg="red.400"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="row"
      >
        <Flex bg="green.200">
          <Text> Logo</Text>
        </Flex>

       
        <Flex>
          <Flex>
            <Image src="/login.svg" alt="Dan Abramov" width="20" height="20" />
          </Flex>
          <Flex>
            <Text>Log In</Text>
            <Text>/Signup</Text>
          </Flex>
        </Flex>
        <Button><Text>FOR BUSINESS</Text></Button>
      </Flex>
    );
}



