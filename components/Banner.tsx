import React from "react";
import { Box, Flex, Input, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";

export const Banner = () => {
  return (
    <Flex
      height="545px"
      maxWidth="100%"
      backgroundImage="url('/new2.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="100%"
      flexDirection="column"
      justifyContent="space-around"
    >
    
      <Flex flexDirection="column" alignItems="center" mt="140px">
        <Text fontSize="52px" color="white" mb="4" fontFamily="new1">
          Be confident, Be Free , Be Brave
        </Text>
        <Text color="white" fontSize="20px" fontFamily="new1">
          Discover and book beauty & wellness professionals near you
        </Text>
        <Flex flexDirection="row" mt="8">
          <Flex
            width="340px"
            height="48px"
            bg="white"
            borderLeftRadius="8"
            borderRight="2px"
            borderRightColor="gray.200"
            alignItems="center"
          >
            <Box margin="2">
              <Image
                src="/search.svg"
                alt="Picture of the author"
                width="14px"
                height="14px"
              />
            </Box>

            <Text fontSize="14px" color="gray.400">
              Book your services
            </Text>
          </Flex>
          <Flex
            width="340px"
            height="48px"
            bg="white"
            borderRightRadius="8"
            alignItems="center"
          >
            <Box margin="2">
              <Image
                src="/loc.svg"
                alt="Picture of the author"
                width="14px"
                height="14px"
                color="red"
              />
            </Box>

            <Text justifyContent="center" fontSize="14px" color="gray.400">
              Where?
            </Text>
            <Spacer />
            <Box mr="4">
              <Image
                src="/loca.svg"
                alt="Picture of the author"
                width="14px"
                height="14px"
                color="red"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Flex justifyContent="center">
        <Text color="white" mr="16" fontFamily="new1">
          Hair Salon
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          Babershop
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          Nail Saloo
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          Beauty Salon
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          Eyebrows & Lashes
        </Text>
        <Text color="white" mr="10" fontFamily="new1">
          Massage
        </Text>
        <Text color="white" mr="10" fontFamily="new1">
          Makeup Artist
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          Day Spa
        </Text>
        <Text color="white" mr="16" fontFamily="new1">
          More...
        </Text>
      </Flex>
    </Flex>
  );
};
