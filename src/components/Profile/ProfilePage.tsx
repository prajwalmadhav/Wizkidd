import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import './ProfilePage.min.css';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { useUserData } from '../../hooks';
import { Navigate } from 'react-router-dom';
import { localStorageKeys } from '../../utils';

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
      data: [6, 5, 8, 2, 8, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 10,
    },
  ],
};

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  var pic = '' as any;
  if (pic == null || pic === undefined) {
    pic = 'https://joeschmoe.io/api/v1/random' as any;
  }
  let showName = 'John' as string;
  if (showName !== undefined) {
    showName = showName.split(' ')[0];
  }

  const user = useUserData();
  if (!user) return <Navigate to={'/'} />;

  console.log(user);

  return (
    <>
      <Flex ml={{ base: 0, lg: '20%' }}>
        <Center py={6}>
          <Box
            maxW={'800px'}
            w={'500px'}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'sm'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
          >
            <Avatar
              size={'3xl'}
              src={pic}
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
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {currentUser?.displayName}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}></Text>
          </Box>
        </Center>
        <Radar data={data} />
      </Flex>
    </>
  );
}
