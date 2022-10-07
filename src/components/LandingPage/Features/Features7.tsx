import { Flex, Box, chakra, Stack, IconButton, createIcon, Button, SimpleGrid, AspectRatio } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d:
    'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});

export default function Features7() {
  return (
  <Flex
  bg="gray.200"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={20}
  w="full"
  justifyContent="center"
  alignItems="center"
  pos="absolute"
  mb={{lg:40}}
>
    <Box
      shadow="xl"
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      px={8}
      py={20}
      mx="auto"
      rounded="xl"
      
    >
      
      <SimpleGrid
        alignItems="start"
        columns={{
          base: 1,
          md: 2,
        }}
        mb={24}
        spacingY={{
          base: 10,
          md: 32,
        }}
        spacingX={{
          base: 10,
          md: 24,
        }}
      >
        <Box>
          <chakra.h2
            mb={4}
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{
              base: "center",
              md: "left",
            }}
            color="gray.900"
            _dark={{
              color: "gray.400",
            }}
            lineHeight={{
              md: "shorter",
            }}
            textShadow="2px 0 currentcolor"
          >
            Video about doctor intro or inspirational video 
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{
              base: "center",
              sm: "left",
            }}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
            fontSize={{
              md: "lg",
            }}
          >
            Handle your subscriptions and transactions efficiently with the clear
            overview in Dashboard. Features like the smart search option allow you
            to quickly find any data you’re looking for.
          </chakra.p>
          <Button
            w={{
              base: "full",
              sm: "auto",
            }}
            size="lg"
            bg="gray.900"
            _dark={{
              bg: "gray.700",
            }}
            _hover={{
              bg: "gray.700",
              _dark: {
                bg: "gray.600",
              },
            }}
            color="gray.100"
            as="a"
          >
            Learn More
          </Button>
        </Box>
        <Box
          w="full"
          h="full"
          p={5}
          bg="gray.100"
          boxShadow={'xl'}
          _dark={{
            bg: "gray.700",
          }}
        >
          <AspectRatio maxW='700px' ratio={16/9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen
              />
          </AspectRatio>
        </Box>
      </SimpleGrid>
      <SimpleGrid
        alignItems="center"
        columns={{
          base: 1,
          md: 2,
        }}
        flexDirection="column-reverse"
        mb={24}
        spacingY={{
          base: 10,
          md: 32,
        }}
        spacingX={{
          base: 10,
          md: 24,
        }}
      >
        <Box
          order={{
            base: "initial",
            md: 2,
          }}
        >
          <chakra.h2
            mb={4}
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            textAlign={{
              base: "center",
              md: "left",
            }}
            color="gray.900"
            _dark={{
              color: "gray.400",
            }}
            lineHeight={{
              md: "shorter",
            }}
          >
            Video about Engineering intro or inspirational video
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{
              base: "center",
              sm: "left",
            }}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
            fontSize={{
              md: "lg",
            }}
          >
            Love to code? Next to our ready-made and free plugins you can use our
            expansive yet simple API; decide how you integrate Payments and build
            advanced and reliable products yourself from scratch.
          </chakra.p>
          <Button
            w={{
              base: "full",
              sm: "auto",
            }}
            size="lg"
            bg="gray.900"
            _dark={{
              bg: "gray.700",
            }}
            _hover={{
              bg: "gray.700",
              _dark: {
                bg: "gray.600",
              },
            }}
            color="gray.100"
            as="a"
          >
            Learn More
          </Button>
        </Box>
        <Box
          w="full"
          h="full"
          p={5}
          bg="gray.200"
          _dark={{
            bg: "gray.700",
          }}
        >
          <AspectRatio maxW='700px' ratio={16/9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Wizkid_Engg_final_cut.mp4'
                allowFullScreen
              />
          </AspectRatio>
        </Box>
      </SimpleGrid>
    </Box>
  </Flex>

    
  )
}
