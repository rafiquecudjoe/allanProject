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
            <a href="#" target="_blank" rel="nofollow, noopener">
              Blog
            </a>
          </Text>
          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              About Us{" "}
            </a>
          </Text>
          <Box></Box>

          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              FAQ
            </a>
          </Text>

          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              Privacy Policy
            </a>
          </Text>

          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              Terms of Service
            </a>
          </Text>

          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              Careers
            </a>
          </Text>

          <Text color="brand.200" fontSize="12px" m="5">
            <a href="#" target="_blank" rel="nofollow, noopener">
              Contact
            </a>
          </Text>

          <Spacer />
          <Box m="1">
            <a href="#" target="_blank" rel="nofollow, noopener">
              <Image
                src="/Iphone.svg"
                alt="Picture of the author"
                width="130px"
                height="46px"
              />
            </a>
          </Box>
          <Box m="1">
            <a href="#" target="_blank" rel="nofollow, noopener">
              <Image
                src="/Android.svg"
                alt="Picture of the author"
                width="130px"
                height="48px"
              />
            </a>
          </Box>
        </Flex>
      </Box>
      <Box h="20">
        <Flex mt="2">
          <a href="#" target="_blank" rel="nofollow, noopener">
            <Text color="white" fontSize="12px" m="5">
              Logo
            </Text>
          </a>
          <Text color="white" opacity="0.5" fontSize="10px" m="5">
            © 2021 Booksy Inc. All rights reserved
          </Text>

          <Spacer />
          <Box m="2" bg="brand.400" borderRadius="20" pt="2" h="10">
            <Image
              src="/iG.svg"
              alt="Instagram icon"
              height="25"
              width="40"
            />
          </Box>
          <Box m="2" bg="brand.400" borderRadius="20" pt="2" h="10">
            <a href="#" target="_blank" rel="nofollow, noopener">
              <Image
                src="/face2.svg"
                alt="Facebook icon"
                height="25"
                width="40"
              />
            </a>
          </Box>
          <Flex m="2" bg="brand.400" borderRadius="20" pt="2" h="10">
            <a href="#" target="_blank" rel="nofollow, noopener">
              <Image
                className="bg=brand.100"
                src="/twitter.svg"
                alt="twitter icon"
                height="25"
                width="40"
              />
            </a>
          </Flex>
        </Flex>
        <Box>
          <a href="#" target="_blank" rel="nofollow, noopener">
            <Text
              color="white"
              opacity="0.5"
              fontSize="10px"
            >
              Switch to mobile view
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  );
};
