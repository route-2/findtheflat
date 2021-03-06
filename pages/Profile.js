import Link from 'next/link';
import { Register } from './auth.api';

import React from 'react';
import { PhoneIcon,CheckIcon } from '@chakra-ui/icons';
import { useState,useEffect } from 'react';
import { Divider, useDisclosure } from '@chakra-ui/react';
import { ModalFooter,Image,InputLeftElement,InputRightElement, InputGroup,ModalContent,InputLeftAddon,InputRightAddon,PinInputField,PinInput,ModalHeader,ModalCloseButton,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
import { Flex, Box,Center, Text,Input, Button,Heading } from '@chakra-ui/react';
const Navbar = () => {
 
  const inputEvent = (event) => {
    console.log(event.target.name)
  }
  
  const[name,setName] = React.useState()
  
 const onSubmit = (event) => {
  setName = event;
  alert("submitted")
 }
  const axios = require('axios')
  
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne/>)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const[phoneNo,setPhoneNo] = React.useState('')
  
  const url = 'https://findtheflat.online/otp/send'
    const SendOtp = () => {
      axios.post(url).then(res=>{
        setOutput(res.data)}).then(console.log)
}   


    return (
<> 
<Flex  bgGradient='linear(purple.100 0%, orange.100 25%, yellow.100 50%)' h='100vh' flexDirection={'column'}> 
<Flex justifyContent={"space-between"} flexDirection={"row"}     
  height={"fit-content"} w='100%'  p={4} color='black' boxShadow="dark-lg"  rounded="md" bg="purple.200"> 
 

 <Text  fontSize="3xl" fontFamily={'mono'}>   FIND THE FLAT </Text> 


<Box flexDirection={"row"} > 


            
<Button variant={'ghost'}> <Image src='https://i.ibb.co/y681NMT/Group-8profile.png'/> </Button>


</Box>
</Flex> 
<Flex direction={'column'} justifyContent={'center'}> 
<Center> 
<Box mt={'200px'}> 
<Heading mb={'15px'} fontStyle={'mono'}  ml={'20px'} fontSize={'4xl'}> Profile </Heading> 
<Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>

<Heading mt={'15px'} fontStyle={'mono'}   fontSize={'2xl'}> {name} </Heading>  

</Box> </Center>
<Flex mt={'20px'} flexDirection={'row'} justifyContent={'center'}> 

<Image   w={'15px'} src='https://i.ibb.co/y681NMT/Group-8profile.png' /> 
<Text  ml={'20px'}> danabramov@gmail.com </Text>


</Flex>
<Center> 


<Box flexDirection={"row"} > 
<Button 
          mt={'20px'}
          bg={'purple.100'}
          ml='4'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         Edit Profile 
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>  </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <InputGroup>
          
         
     
    <Input type="name" placeholder="name" onChange={(e)=>setName( e.target.value )} />
  </InputGroup>
            
              
<Button bg={'pink.100'} mt={'40px'} onClick={(e)=> onSubmit()} borderRadius={'22px'}> Done  </Button>
            </ModalBody>
            <ModalFooter>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
        
         


</Box>
</Center>

 
</Flex>

</Flex>





</>




    )







}
export default Navbar;