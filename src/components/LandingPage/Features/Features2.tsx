import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Icon,
  } from '@chakra-ui/react';
  // import {
  //   IoAnalyticsSharp,
  //   IoLogoBitcoin,
  //   IoSearchSharp,
  // } from 'react-icons/io5';
  import { ReactElement } from 'react';
import { IoLogoBitcoin } from 'react-icons/io';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg:2 }} spacing={10}>
        <Stack mt={{base:'-150%',lg:0}} ml={{base:5,lg:-40}} mr={{base:3,lg:1}}>
          <Flex >
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'https://i.postimg.cc/hjDCv24M/Online-learning-amico.png'
              }
              objectFit={'cover'}
            />
          </Flex>   
          </Stack>          
          
          <Stack spacing={6} mr={{base: 0, lg:-40}} mt={{base: '-40%', lg: 20}} ml={{base: 0, lg:20}}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={{base:'lg',lg:'2xl'}}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About Us
            </Text>
            <Heading>About us section </Heading>
            <Text color={'gray.500'} textAlign='justify' fontSize={{base:'md',lg:'lg'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
               
            </Stack>
            
          </Stack>
          
          
        </SimpleGrid>
      </Container>
    );
  }