import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    HStack,
    Grid,
    Flex,
  } from '@chakra-ui/react';
  
  const IMAGE1 =
    'https://i.postimg.cc/fyCCkf4c/Online-learning-cuate.png';
    const IMAGE2 =
    'https://i.postimg.cc/MT8mDFq0/Exams-bro.png';
    const IMAGE3 =
    'https://i.postimg.cc/NFBbgPnG/Telecommuting-rafiki.png';
    const IMAGE4 =
    'https://i.postimg.cc/SsWDbpDt/Collab-bro.png';
  
  export default function ProductSimple() {
    return (
        
        <Flex mt={{base:0,lg:10}} ml={{base:0,lg:4}} mb={{base:0,lg:60}} bg={useColorModeValue('white', 'gray.800')}>
            <HStack  spacing={{lg:35}} pl={{lg:35}} pt={{lg:60}} pb={{lg:58}} bg={useColorModeValue('white', 'gray.800')}> 
            
            <Box
                role={'group'}
                p={6}
                isInline
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    
                    _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 2,
                    
                    backgroundImage: `url(${IMAGE1})`,
                    filter: 'blur(35px)',
                    zIndex: -1,
                    
                    }}
                    _groupHover={{
                    _after: {
                        filter: 'blur(30px)',
                    },
                    }}>
                    <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE1}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {/* tag line comes here  */}
                    </Text>
                    <Heading fontSize={'3xl'} fontFamily={'body'} fontWeight={500}>
                    Feature 1
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {/* Text comes here  */}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        
                    </Text>
                    </Stack>
                </Stack>
            </Box>

                {/* box 2 */}
            <Box
                role={'group'}
                p={6}
                isInline
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    
                    _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 2,
                    
                    backgroundImage: `url(${IMAGE2})`,
                    filter: 'blur(30px)',
                    zIndex: -1,
                    
                    }}
                    _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                    }}>
                    <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE2}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {/* tag line comes here  */}
                    </Text>
                    <Heading fontSize={'3xl'} fontFamily={'body'} fontWeight={500}>
                    Feature 2
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {/* Text comes here  */}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        
                    </Text>
                    </Stack>
                </Stack>
            </Box>
                {/* box 3 */}
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                isInline
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    
                    _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 2,
                    
                    backgroundImage: `url(${IMAGE3})`,
                    filter: 'blur(30px)',
                    zIndex: -1,
                    
                    }}
                    _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                    }}>
                    <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE3}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {/* tag line comes here  */}
                    </Text>
                    <Heading fontSize={'3xl'} fontFamily={'body'} fontWeight={500}>
                    Feature 3
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {/* Text comes here  */}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        
                    </Text>
                    </Stack>
                </Stack>
            </Box>

            {/* Box 4 comes here */}

            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                isInline
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    
                    _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 2,
                    
                    backgroundImage: `url(${IMAGE4})`,
                    filter: 'blur(30px)',
                    zIndex: -1,
                    
                    }}
                    _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                    }}>
                    <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={IMAGE4}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {/* tag line comes here  */}
                    </Text>
                    <Heading fontSize={'3xl'} fontFamily={'body'} fontWeight={500}>
                    Feature 4 
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'xl'}>
                        {/* Text comes here  */}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        
                    </Text>
                    </Stack>
                </Stack>
            </Box>
        
            </HStack>
        </Flex>
        
     
    );
  }
  