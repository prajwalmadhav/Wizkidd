import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import  './ProfilePage.min.css';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from '@chakra-ui/react';
import { useEffect } from 'react';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['', 'Intermediate', 'Py Basics', 'Advance', 'Core', 'CS'],
  datasets: [
    {
      label: 'Report',
      data: [6, 5, 8, 2, 8,9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 10,
    },
  ],
};

const getDataInLocalStorage = (key: string): object => {
  // 1. Get data in localstorage
  const stringifiedJSON = localStorage.getItem(key) || '';

  return parseJSON(stringifiedJSON);
};

  
export default function ProfilePage() {
   
  return( 
  <>
    <Flex ml={{ base: 0, lg: '20%' }} >
        <Center py={6}>
          <Box
            maxW={'800px'}
            w={'500px'}

            bg={useColorModeValue('#ffffff00', 'gray.900')}
            boxShadow={''}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'3xl'}
              // src={pic}
              alt={'Avatar Alt'}
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }} />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
            
            </Heading>
            {}{localStorage.getItem('picture')}
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                Profile Photo
            </Text>
          </Box>
        </Center>
        <Box> 
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" >
                    <FormLabel>Name{localStorage.getItem('name')}</FormLabel>
                    

 
                    
                  </FormControl>
                </Box>
                <Box>
                  
                </Box>
              </HStack>
              <FormControl id="email" >
                <FormLabel>Email{localStorage.getItem('email')}</FormLabel>
                
              </FormControl>
              
              
              
            </Stack>
          </Box>
        </Stack>
      </Flex>

      </Box>
      </Flex>
      
      
      
  </>
    
  
  );
}
function parseJSON(stringifiedJSON: string): object {
  throw new Error('Function not implemented.');
}

