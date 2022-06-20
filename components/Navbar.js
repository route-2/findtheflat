import Link from 'next/link';
import Image from 'next/image';

import React from 'react';
import { PhoneIcon,CheckIcon } from '@chakra-ui/icons';
import { useState,useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { ModalFooter,InputLeftElement,InputRightElement, InputGroup,ModalContent,InputLeftAddon,InputRightAddon,PinInputField,PinInput,ModalHeader,ModalCloseButton,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
import { Flex, Box, Text,Input, Button,Heading } from '@chakra-ui/react';
const Navbar = () => {
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
      axios.get(url).then(res=>{
        setOutput(res.data)}).then(console.log)





    }   


    return (
<> 
<Flex justifyContent={"space-between"} flexDirection={"row"}     
  height={"fit-content"} w='100%'  p={4} color='black' boxShadow="dark-lg"  rounded="md" bg="purple.200"> 
 

<Text  fontSize="3xl" fontFamily={'mono'}>   FIND THE FLAT </Text>


<Box flexDirection={"row"} > 
<Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         Login / SignUp
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Login/SignUp</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <InputGroup>
          
           <InputLeftElement
      pointerEvents="none"
      children={<PhoneIcon color="gray.300" />}
    />
    <Input type="phone" placeholder="Phone number" onChange={e=>setPhoneNo(e.target.value)} />
  </InputGroup>
            
              
<Button bg={'pink.100'} mt={'40px'} onClick={SendOtp} borderRadius={'22px'}> Send OTP  </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
         


</Box>
</Flex>






</>




    )







}
export default Navbar;