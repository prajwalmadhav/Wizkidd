import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Icon,
  Image,
  Link,
} from "@chakra-ui/react";

import { FiExternalLink } from "react-icons/fi";

const CTA = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} py={{base:10,lg:40}}>
      <Flex bg="brand.400">
        <Image
          src="https://www.gurooproducer.com/hubfs/resources2.png"
          alt="How it works illustration"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          ml={{ base: 2, lg: 5 }}
          // bg="gray.100"
          loading="lazy"
          opacity={1}
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color={useColorModeValue("brand.600", "gray.300")}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          How it works ?
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
          fontWeight="medium"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="auto"
          textShadow="1px 0 currentcolor"
        >
           specific title [doctor] {/*//We&apos;re here to help */}
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
          textAlign='justify'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="md">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            color={useColorModeValue("black","black")}
            bg={useColorModeValue("powderblue", "powderblue")}
            _hover={{
              bg: useColorModeValue("brand.700", "brand.600"),
            }}
          >
             
            
            <Link href={'#'}>Sign Up to Get Started</Link>
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default CTA;