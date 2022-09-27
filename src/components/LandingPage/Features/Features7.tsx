import { Flex, Box, chakra, Stack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Features7() {
  return (
    

    <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="100%"
  py={{lg:'250'}}
  alignItems="center"
  justifyContent="center"
  
>
  
  <Box
    
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 40,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "7xl",
    }}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
    }}
  >
    
    <Box
      w={{
        lg: "90%",
      }}
      h={{ lg:"400"}}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        rounded={{
          lg: "lg",
        }}
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
        }}
      ></Box>
    </Box>

    <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "7xl",
      }}
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        Video comes here{" "}
        <chakra.span
          color="brand.600"
          _dark={{
            color: "brand.400",
          }}
        >
          Idea
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
        reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim
        expedita aperiam mollitia iure consectetur dicta tenetur, porro
        consequuntur saepe accusantium consequatur.
      </chakra.p>

      <Box mt={8}>
        <Link
          color="gray.100" to={''}
        >
          Start Now
        </Link>
      </Box>
    </Box>
  </Box>
</Flex>
  )
}
