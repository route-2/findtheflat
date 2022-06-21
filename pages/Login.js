import { PhoneIcon } from "@chakra-ui/icons";
import { Button,Text,HStack, ModalFooter,ModalContent,ModalCloseButton,Input, InputGroup,InputLeftAddon,InputRightAddon,PinInputField,PinInput,ModalHeader,ModelContent,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { Log } from "./auth.api";
import { CheckPhone,sendOtp, } from "./auth.api";

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
   const [phoneNo,SetPhoneNo] = useState('')
   const[otp,setOtp]=useState('');

   const clickHandler = async ()=> {
    const dataLog = await Log(phoneNo,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Iis5MTkzNTM3MjYyMjciLCJzZXNzaW9uSWQiOiIyMTg2YzY0ZS02ZmUzLTRhMjEtODcyMi0wYTRkY2U5Mzg1YjgiLCJpYXQiOjE2NTU4MDQyMDgsImV4cCI6MTY1NTg5MDYwOH0.DCCDA0D5x3N5o5JKEjZQJUPi6ZeTpyXF2dVPZglBaqs",otp);
    console.log(dataLog.error)
    if(dataLog.error === false){
      console.log("registred")
    }
  }
   
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
            <Input onChange={e=>SetPhoneNo(e.target.value)} ></Input>
            <Text> Enter OTP sent on {Log.phone} </Text>

            <Input onChange={e=>setOtp(e.target.value)} placeholder="Enter OTP" ></Input>
            
              
<Button onClick={clickHandler} mt={'40px'} width={'200px'} bg={'purple.200'} borderRadius={'22px'}> Login  </Button>
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