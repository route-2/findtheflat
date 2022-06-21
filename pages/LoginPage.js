import React from 'react';
import { Text,Flex,Input,Button,Heading } from '@chakra-ui/react';

const LoginPage = () => {
    return ( 
        <Flex>
             <Text> Hello </Text>
      <Text> Enter OTP sent on </Text>
      <Input placeholder="otp"/>
      <Button> Login </Button>
     
      <Text> Enter OTP sent on </Text>
      <Input placeholder="otp"/>
      <Input variant={'flushed'} placeholder="enter your full name"/> 
      <Input variant={'flushed'} placeholder="email@example.com"/> 

      <Button> Sign Up </Button>
        </Flex>
     );
}
 
export default LoginPage;