import { PhoneIcon } from "@chakra-ui/icons";
import { Button,Text,HStack, ModalFooter,ModalContent,ModalCloseButton,Input, InputGroup,InputLeftAddon,InputRightAddon,PinInputField,PinInput,ModalHeader,ModelContent,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { Log } from "./auth.api";

function Login () {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  console.log(Log)
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
   const {phoneNo,SetPhoneNo} = useState('')
   
    return (
      <>
      
        <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
         Login / SignUp
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Login </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text> Hello {Log.sessionId} </Text>
            <Text> Enter OTP sent on {Log.phone} </Text>

            <InputGroup pt={'20px'}>
            <HStack>
  <PinInput bg={'purple'} type='alphanumeric' mask>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />

  </PinInput>
</HStack>
  </InputGroup>
            
              
<Button mt={'40px'} width={'200px'} bg={'purple.200'} borderRadius={'22px'}> Login  </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default Login;