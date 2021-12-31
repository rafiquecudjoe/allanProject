import React from "react";
import { Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import Image from "next/image";


export const Navbar = () => {
    
    return (
      <Flex
        height={20}
        bg="teal.400"
        justifyContent="space-around"
        alignItems="center"
        flexDirection="row"
      >
        <Flex marginLeft="40">
          <Text color="white"> Logo</Text>
        </Flex>
        <Spacer />
        <Flex alignItems="center" justifyContent="center" marginRight="28">
          <Flex borderRadius="20" p="1" border="2px" borderColor="white">
            <Image
              src="/login.svg"
              alt="Dan Abramov"
              width="20"
              height="20"
              color="white"
            />
          </Flex>

          <Flex m="5">
            <Text fontSize="12px" color="white">
              Log In / Sign Up
            </Text>
          </Flex>
          <Flex m="1">
            <Image src="/flag.svg" alt="Dan Abramov" width="20" height="20" />
          </Flex>
          <Flex>
            <Text color="white" fontSize="12px">
              US
            </Text>
          </Flex>

          <Button m="5" width="120px" height="30px">
            <Text fontSize="10px">FOR BUSINESS</Text>
          </Button>
        </Flex>
      </Flex>
    );
}



