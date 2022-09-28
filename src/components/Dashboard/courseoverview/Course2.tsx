import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';

function randomColor() {
  return Math.floor(Math.random() * 5);
}

const colorList: string[] = [
  '#E53E3E',
  '#38A169',
  '#00B5D8',
  '#44337A',
  '#ED64A6',
];

export default function ClickMe(props: ButtonProps) {
  const [colorCode, setColorCode] = useState(colorList[randomColor()]);

  return (
    <Flex
      mt={{ base: 0, md: "10%", lg: 20 }}
      mb={{ base: 0, md: "10%", lg: 20 }}
      ml={{ base: 0, md: "10%", lg: "30%" }}
      mr={{ base: 0, md: "10%", lg: "15.8%" }}
      
      justifyContent="center"
      alignItems="center"
      // boxShadow='outline'

      border="4px "
      borderRadius="lg"
      borderWidth="4px"
      borderStyle="dashed"
      
      bgColor={'gray.200'}
      py={{lg:'50'}}
      px={{lg:10}}>
      <Button
        {...props}
        px={8}
        bg={useColorModeValue('black', 'gray.900')}
        color={'white'}
        
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        >
        Upload File
      </Button>
    </Flex>
  );
}