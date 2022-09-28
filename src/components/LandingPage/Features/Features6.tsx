import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
  Icon,
  VStack,
  SimpleGrid,
  Heading,
  Divider,
  Stack,
  Center,
} from "@chakra-ui/react";


import { useNavigate } from "react-router-dom"
import { FaRegBookmark, FaRegClock } from "react-icons/fa";
import {BsFillAwardFill} from "react-icons/bs";

const Home = () => {
  const CourseImage1 = "https://miro.medium.com/max/875/0*IkBprj2jlkh4H_qO.png"
  const CourseImage2 = " https://miro.medium.com/max/875/0*emfQ_cKXSeCdPgb9.jpg"
  const CourseImage3 = " https://miro.medium.com/max/875/0*D9HAiv-jW-9kC76O.jpg"
 
  const navigate = useNavigate()
  return (
    <>      
      
      {/* All cards */} 
      <Heading as='h2' size='xl' 
      ml = {{ base: '25px', md: 20, lg: '15%' }}
      mt = {{ base: '15px'}} 
      mb={{lg:'-50px'}}>
         | COURSES AVAILABLE
      </Heading> 
      <br/>
      
      
      
      
      {/* course cards row 1 */}
      <Flex
      ml = {{ base: 0, md: 20, lg: '5%' }}
      mx = {{ base: 1 }}
      my = {{ base : 0, lg : 20 }}
      justifyContent = {{ base: "", lg: "center" }}
      px = {4}
      direction={{ base: "column", md: "column", lg: "row" }}
      py = {{ base: 4, md: 4, lg: 4 }}
      
      >   
        {/* box 1 */}
        
          <Box
            onClick={()=>{
              navigate( "/")
            }}
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="2xl"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src={CourseImage1}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
                Course 1
              </chakra.h1>
            </Flex>

            <Box py={4} px={6}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                
              </chakra.h1>

              <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")} textAlign='justify'>
              Gives an overview of the vast world of programming, and explains the key concepts in detail.
              </chakra.p>

              
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon
                    as={FaRegClock}
                    
                    h={6}
                    w={6}
                    mr={2}
                  />

                  <chakra.h1 px={2} fontSize="sm">
                  4 Weeks 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  Beginner Level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
        
        {/* box 2 */}
        <Box
        onClick={()=>{
          navigate( "/")
        }}
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="2xl"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}
            

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src={CourseImage2}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              Course 2 
              </chakra.h1>
            </Flex>

            <Box py={4} px={6}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                
              </chakra.h1>

              <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")} textAlign='justify'>
              Key concepts regarding Implementation are discussed along with useful examples to start your programming journey!
              </chakra.p>

              
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon
                    as={FaRegClock}
                    
                    h={6}
                    w={6}
                    mr={2}
                  />

                  <chakra.h1 px={2} fontSize="sm">
                  4 Weeks 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  Intermediate Level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

          {/* box 3 */}
          <Box
          onClick={()=>{
            navigate( "/")
          }}
            w="360px"
            h="410px"
            mr="50px"
            mb="35px"
            bg={useColorModeValue("white", "gray.800")}
            shadow="2xl"
            rounded="lg"
            overflow="hidden"
            
            transform="scale(1.0)"
            objectFit="contain"
            transition="0.3s ease-in-out"
            _hover={{
              transform: 'scale(1.09)',
            }}

          >
            <Image
              w="full"
              h={40}
              fit="cover"
              objectPosition="center"
              src={CourseImage3}
              alt="avatar"
            />

            <Flex alignItems="center" px={6} py={3} bg="gray.900">
              <Icon as={FaRegBookmark} h={6} w={6} color="white" />

              <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              Course 3  
              </chakra.h1>
            </Flex>

            <Box py={4} px={6}>
              <chakra.h1
                fontSize="xl"
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                
              </chakra.h1>

              <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")} textAlign='justify'>
              The module explains the process of handling exceptions and the methods used for this purpose.
              </chakra.p>

              
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon
                    as={FaRegClock}
                    
                    h={6}
                    w={6}
                    mr={2}
                  />

                  <chakra.h1 px={2} fontSize="sm">
                  4 Weeks 
                  </chakra.h1>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  <Icon as={BsFillAwardFill} h={6} w={6} mr={2} />

                  <chakra.h1 px={2} fontSize="sm">
                  Beginner Level
                  </chakra.h1>
                </Flex>
                <Flex
                  alignItems="center"
                  mt={4}
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  
                </Flex>
              
            </Box>
          </Box>
          

      </Flex>

      {/* course cards row 2 */}
      <br/>
      {/* <Divider orientation='horizontal' ml='280px'/> */}

      {/* test cards row 3 */}

      {/* course cards row 4 */}
    </>
  );
};


export default Home;