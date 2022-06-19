import { Button,ModalFooter,InputGroup,InputLeftAddon,Input,InputRightAddon,PinInputField,PinInput,ModalHeader,ModelContent,Modal,ModalBody,ModalOverlay } from "@chakra-ui/react";
function Login () {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
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
      </>
    )
  }
  export default Login;