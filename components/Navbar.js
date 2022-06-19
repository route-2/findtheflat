import Link from 'next/link';
import Image from 'next/image';
import { useDisclosure,useState } from '@chakra-ui/react';
import { ModalFooter,InputGroup,InputLeftAddon,InputRightAddon,PinInputField,PinInput,ModalHeader,ModelContent,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
import { Flex, Box, Text,Input, Button,Heading } from '@chakra-ui/react';
const Navbar = () => {
  // const OverlayTwo = () => (
  //   <ModalOverlay
  //     bg='none'
  //     backdropFilter='auto'
  //     backdropInvert='80%'
  //     backdropBlur='2px'
  //   />
  // )
  // const OverlayOne = () => (
  //   <ModalOverlay
  //     bg='blackAlpha.300'
  //     backdropFilter='blur(10px) hue-rotate(90deg)'
  //   />
  // )
  // const [overlay, setOverlay] = useState()
  // const { isOpen, onOpen, onClose } = useDisclosure()
    return (
<> 
<Flex justifyContent={"space-between"} flexDirection={"row"}     
  height={"fit-content"} w='100%'  p={4} color='black' boxShadow="dark-lg"  rounded="md" bg="purple.200"> 
 

<Text  fontSize="3xl" fontFamily={'mono'}>   FIND THE FLAT </Text>


<Box flexDirection={"row"} > 
<Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
         Login / SignUp
        </Button>
        {/* <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Login/SignUp</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <InputGroup>
    <InputLeftAddon children="+91" />
    <Input type="phone" borderLeftRadius="0" placeholder="phone number" />
  </InputGroup>
            
              
<Button bg={'purple.200'} borderRadius={'22px'}> Send OTP  </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
 */}


</Box>
</Flex>






</>




    )







}
export default Navbar;