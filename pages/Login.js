import React from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';
import Navbar from './Profile';

const Login = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('purple.100', 'purple.400');

  return (
    <> 
    

    <Flex h="100vh"  bgGradient='linear(purple.100 0%, orange.100 25%, yellow.100 50%)' alignItems="center" flexDirection={'column'} justifyContent="center">
    
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        w={'400px'}
        h={'500px'}
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="phone number"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="******"
          type="otp"
          variant="filled"
          mb={6}
        />
        <Button colorScheme="purple" mb={8}>
          Log In
        </Button>
        New to this site? <Button mt={4} mb={4} colorScheme="purple" href='./Register'> Register </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="purple"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
    </>
  );
};

export default Login;
