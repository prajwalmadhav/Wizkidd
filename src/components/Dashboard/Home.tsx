import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';


import {
 
  HStack,
 
  ListIcon,
 
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';



import {
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'2xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'xl'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontSize={'xl'} fontWeight={'large'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'4xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Simple() {
  return (
    <Container maxW={'6xl'}>
      <Heading as='h2' size='2xl' noOfLines={1} mt={{lg:10}} pb={{lg:10}} textAlign='left'>
        Heading can be added here
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 ,lg:10 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Automatic Watch
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              SUBSCRIPT 
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text
                    color={useColorModeValue('gray.500', 'gray.400')}
                    fontSize={'2xl'}
                    fontWeight={'300'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore
                  </Text>
                  <Text fontSize={'lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                    maxime modi nam officiis porro, quae, quisquam quos
                    reprehenderit velit? Natus, totam.
                  </Text>
                </VStack>
              <Box>
                  <Text
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}>
                    
                  </Text>
                  <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                      <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}>
                        Features or a tag line on why to choose.
                      </chakra.h1>
                      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                          title={'Users'}
                          stat={'5,000'}
                          icon={<BsPerson size={'3em'} />}
                        />
                        <StatsCard
                          title={'Servers'}
                          stat={'1,000'}
                          icon={<FiServer size={'3em'} />}
                        />
                        <StatsCard
                          title={'Datacenters'}
                          stat={'7'}
                          icon={<GoLocation size={'3em'} />}
                          />
                      </SimpleGrid>
                    </Box>
                
              </Box>
            
          </Stack>

          {/* <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button> */}

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            
            
          </Stack>
        </Stack>
      </SimpleGrid>

      <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                79
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor.
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Growth
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  149
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  unlimited build minutes
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  5TB Lorem, ipsum dolor.
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button w="full" colorScheme="red">
                  Start trial
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                349
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                unlimited build minutes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Lorem, ipsum dolor.
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                5TB Lorem, ipsum dolor. 
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
    </Container>
  );
}