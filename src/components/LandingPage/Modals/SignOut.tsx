import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ChakraProvider,
  Checkbox,
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import './SignInModal.min.css';
import { Button, Col, Container, Form, Navbar } from 'react-bootstrap';

export default function SignOut() {
  const signOut = async () => {};

  return (
    <Button
      className="Button3"
      onClick={() => {
        SignOut();
        console.log('DONE');
      }}
    >
      Sign Out
    </Button>
  );
}
