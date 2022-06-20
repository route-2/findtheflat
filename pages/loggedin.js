import { Flex,Center,Divider, Box,ModalOverlay, Text,Input,Image,Select, Button, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { useDisclosure,useState } from '@chakra-ui/react';
import { Modal,Radio,Link,RadioGroup,Stack, ModalContent,ModalHeader,ModalBody,ModalCloseButton,ModalFooter, InputGroup,InputLeftElement, } from '@chakra-ui/react';
import { ChevronLeftIcon,TriangleDownIcon, ChevronRightIcon, SearchIcon,PhoneIcon, } from '@chakra-ui/icons';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


const LoggedIn=()=>{
    const [value, setValue] = React.useState('1')
    const [Tvalue, setTValue] = React.useState('1')
    const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
      const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
      const [overlay, setOverlay] = React.useState(<OverlayOne/>)
      const { isOpen, onOpen, onClose } = useDisclosure()
return(



    
<>
 <Flex justifyContent={"space-between"} flexDirection={"row"}     
  height={"fit-content"} w='100%'  p={4} color='black' boxShadow="dark-lg"  rounded="md" bg="purple.200"> 
 

 <Text  fontSize="3xl" fontFamily={'mono'}>   FIND THE FLAT </Text> 


<Box flexDirection={"row"} > 

<Button variant={'ghost'}> <Image  src='https://i.ibb.co/3C2q7Vs/Vectorflash.png'/> </Button>
            
<Button variant={'ghost'}> <Image  src='https://i.ibb.co/y681NMT/Group-8profile.png'/> </Button>


</Box>
</Flex> 

<Flex  mt={'80px'} height={'100%'}  flexDirection={"row"} justifyContent={'center'} > 
  <Select bg={"purple.200"} borderRadius={"22px"} boxShadow={"dark-lg"} placeholder='City' mr={'20px'}  variant={"filled"} width={"100px"}>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  <Input bg={"purple.200"} placeholder='Search Locality/Landmark' borderRadius={"22px"} boxShadow={"dark-lg"} width={"500px"}/>
  <Button bg={"purple.200"} ml={'20px'} boxShadow={"dark-lg"} borderRadius={"22px"}> <SearchIcon/> &nbsp; Search </Button>
  </Flex>
  <Flex mt={'30px'} mr={'90px'} flexDirection={'row'} justifyContent={'flex-end'}> 
  
  <Button
  bg={'purple.200'}
          ml='4'
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
         Filter &nbsp; <TriangleDownIcon/>
        </Button>
        
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
          
          <Center> 
            <ModalHeader> FILTERS </ModalHeader> </Center>
            <Text fontStyle={'mono'} fontSize={'xl'} ml={'20px'}> Apartment Type </Text>
          <Flex mt={'20px'} justifyContent={'space-between'} flexDirection={'column'}> 
          
          <ButtonGroup ml={'8px'} mr={'8px'} > 
         
           <Button bg={'pink.100'}> 1 BHK </Button> <Button bg={'pink.100'}> 2 BHK </Button> <Button bg={'pink.100'}> 3 BHK </Button> <Button bg={'pink.100'}> 4 BHK </Button> <Button bg={'pink.100'}> 4+ BHK </Button> </ButtonGroup> 
          </Flex>
          <Text mt={'20px'} ml={'20px'} fontSize={'xl'}> Rent Range </Text>
          <Flex flexDirection={'row'}> <Input variant='flushed' width={'50%'} /> To <Input variant='flushed' width={'50%'} /> </Flex>
          <Flex mt={'20px'} ml={'20px'} flexDirection={'column'}>
          <Text fontSize={'xl'}> Availability </Text>
          <RadioGroup mt={'10px'} onChange={setValue} value={value}>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='pink' value='1'>
      Immediate
    </Radio>
    <Radio colorScheme='pink' value='2'>
      Within 15 days
    </Radio>
  </Stack>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='pink' value='3'>
      Within 30 days
    </Radio>
    <Radio colorScheme='pink' value='4'>
      After 30 days
    </Radio>
  </Stack>
</RadioGroup>
 </Flex>
 <Flex mt={'20px'} ml={'20px'} flexDirection={'column'}>
          <Text fontSize={'xl'}> Preferred Tenants </Text>
          <RadioGroup mt={'10px'}  onChange={setTValue} value={Tvalue}>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='pink' value='1'>
      Family
    </Radio>
    <Radio colorScheme='pink' value='2'>
      Bachelors
    </Radio>
  </Stack>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='pink' value='3'>
      Company
    </Radio>
   
  </Stack>
</RadioGroup>
 </Flex>
            <ModalBody>
          
            
              
<Button bg={'pink.100'} mt={'40px'} borderRadius={'22px'}> Done  </Button>
            </ModalBody>
            <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
         
  
  
  
  </Flex>
<Center> 
  <Flex width={"1000px"} mb={'400px'} height={'500px'} mt={'60px'} bg={"purple.200"} flexDirection={'column'} justifyContent={'fit-content'}> 
  <Box> <Text mt={'20px'} ml={"40px"} color={'black'} fontFamily={"mono"} fontSize={"xl"}> 2 BHK at Pune Residency </Text></Box>
  <Divider  colorScheme={'black'} mt={'20px'} orientation='horizontal' />
 
  
      <Flex mt={'20px'} flexDirection={"row"} justifyContent={'space-between'}>
       <Box  ml={"20px"} textAlign={'center'} fontSize={'xl'}> inches </Box> <Divider orientation='vertical' />
       <Box textAlign={'center'} fontSize={'xl'}> inches</Box> <Divider colorScheme={'white'} orientation='vertical' />

       <Box mr={"20px"} fontSize={'xl'}> inches </Box> 

        
      </Flex>
      <Divider colorScheme={'black'} mt={'20px'} orientation='horizontal' />

 
 <Flex  >   
 <Flex width={'50%'}> 
 <Box borderWidth={"20px"} borderColor={'purple.200'} > <Image  src="https://picsum.photos/400/300/?blur"/>  </Box>
 
 </Flex>
 <Flex width={"50%"} flexDirection={'column'} > 
 
 <Flex  mt={'50px'} flexDirection={"row"} justifyContent={'space-between'}>
 <Flex textAlign={'center'} > <Image src='https://i.ibb.co/f4gLsDc/Sofa.png'/> <Text mt={'30px'} ml={'15px'} fontSize={'xl'}> Semi Furnished </Text> </Flex> <Divider orientation='vertical' />
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/VMC7c46/Apartment.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> 2BHK </Text> </Flex> <Divider orientation='vertical' />
       
        
      </Flex>
      <Flex mt={'70px'} flexDirection={"row"} justifyContent={'space-between'}>
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/Bngkf7J/Vector.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> ALL  </Text> </Flex> <Divider orientation='vertical' />
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/FWXmPjg/Lease.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> Ready to Move  </Text> </Flex> <Divider orientation='vertical' />

       
        
      </Flex>
      

 <Flex mt={'40px'} flexDirection={'row'}  justifyContent={'space-between'}> <Button width={'250px'}  > Contact Owner </Button> 
 <Button borderwidth={'1px'} width={'50px'}  borderColor={'white'} variant={'outline'} > <Image src='https://i.ibb.co/h8yt49m/Vector-1.png'/></Button> <Divider orientation='vertical' />
 <Button borderwidth={'1px'} width={'50px'} borderColor={'white'} variant={'outline'} mr={'40px'}> <Image src='https://i.ibb.co/NWgrV9V/Location.png'/></Button>
 
 
 
 </Flex>
 
 

 </Flex>
 
 
 
 
 
  </Flex>
  
  
  
  
  
  
  </Flex>
  </Center>







</>




)
};
export default LoggedIn;



