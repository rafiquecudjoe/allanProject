import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      bg="brand.100"
      borderTop="1px"
      borderColor="gray.100"
      height="195px"
      flexDirection="column"
    >
      <Box borderBottom="1px" borderColor="brand.300">
        <Flex h="20">
          <Text color="brand.200" fontSize="12px" m="5">
            Blog
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            About Us
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            FAQ
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            Privacy Policy
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            Terms of Service
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            Careers
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            Contact
          </Text>
          <Spacer />
          <Box m="1">
            <Image
              src="/../public/downloadIphone.svg"
              alt="Picture of the author"
              width="130px"
              height="46px"
            />
          </Box>
          <Box m="1">
            <Image
              src="/../public/downloadAndroid.svg"
              alt="Picture of the author"
              width="130px"
              height="48px"
            />
          </Box>
        </Flex>
      </Box>
      <Box h="20">
        <Flex mt="2">
          <Text color="white" fontSize="12px" m="5">
            Logo
          </Text>
          <Text color="white" opacity="0.5" fontSize="10px" m="5">
            © 2021 Booksy Inc. All rights reserved
          </Text>

          <Spacer />
          <Box m="1">
            <Image
              src="/../public/iG.svg"
              alt="Instagram icon"
              width="40"
              height="40"
            />
          </Box>
          <Box m="1">
            <Image
              src="/../public/face2.svg"
              alt="Facebook icon"
              width="40"
              height="40"
            />
          </Box>
          <Box m="1">
            <Image
              className="bg=brand.100"
              src="/../public/twitter.svg"
              alt="twitter icon"
              height="40"
              width="40"
            />
          </Box>
        </Flex>
        <Box>
          <Text color="white" opacity="0.5" fontSize="10px">
            Switch to mobile view
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
