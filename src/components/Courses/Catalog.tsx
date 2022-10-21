import { AspectRatio, Box, chakra, Flex, Link } from '@chakra-ui/react'
import React from 'react'

export default function Catalog() {
  return (
    
    <><Flex
        ml={{ base: 0, md: 20, lg: '240px' }}
        mx={{ base: 1 }}
        mr={{lg:0}}
        bg="#eee"
        // my = {{ base : 0, lg : 10 }}
        justifyContent={{ base: "", lg: "center" }}
        px={5}
        direction={{ base: "column", md: "column", lg: "row" }}
        py={{ base: 4, md: 4, lg: 4 }}
      >
        {/* row 1 box 1  */}
        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

      </Flex>

      <Flex
        ml={{ base: 0, md: 20, lg: '240px' }}
        mx={{ base: 1 }}
        mr={{lg:0}}
        bg="#eee"
        // my = {{ base : 0, lg : 10 }}
        justifyContent={{ base: "", lg: "center" }}
        px={5}
        direction={{ base: "column", md: "column", lg: "row" }}
        py={{ base: 4, md: 4, lg: 4 }}
      >
        {/* row 1 box 1  */}
        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
          
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

        <Flex
          bg="#eee"
          _dark={{
            bg: "#ffffff",
          }}
          p={30}
          w="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            mx="auto"
            maxW='400px'
            rounded="xl"
            shadow="md"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}

          >
            <AspectRatio maxW='400px' ratio={16 / 9}>
              <iframe
                title='naruto'
                src='https://storage.googleapis.com/wizkid-media/media/Doctor%20Wizkid%20(1).mp4'
                allowFullScreen />
            </AspectRatio>

            <Box p={6} minH="200px">
              <Box>
                {/* <chakra.span
      fontSize="xs"
      textTransform="uppercase"
      color="brand.600"
      _dark={{
        color: "brand.400",
      }}
    >
      Product
    </chakra.span> */}
                <Link
                  display="block"
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  fontWeight="bold"
                  fontSize="2xl"
                  mt={{ lg: 0 }}
                  _hover={{
                    color: "gray.600",
                    textDecor: "underline",
                  }}
                >
                  Video Title come here
                </Link>
                <chakra.p
                  mt={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                  parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                  egestas quam volutpat viverra. In pretium nec senectus erat. Et
                  malesuada lobortis.
                </chakra.p>
              </Box>


            </Box>
          </Box>
        </Flex>

      </Flex>
      
      </>
    
  )
}
