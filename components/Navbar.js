import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text,Input, Button,Heading } from '@chakra-ui/react';
const Navbar = () => {

    return (
<> 
<Flex justifyContent={"space-between"} flexDirection={"row"}    > 
<Box  height={"fit-content"} w='100%'  p={4} color='black' boxShadow="dark-lg"  rounded="md" bg="white"> 
<Box textAlign={'start'}> 

<Text  fontSize="3xl" fontFamily={'mono'}>   FIND THE FLAT </Text>
</Box>
<Box textAlign={"end"}> 

<Button  variant='ghost' colorScheme='gray.100'> Login/ Signup </Button>
</Box>
</Box>
</Flex>






</>




    )







}
export default Navbar;