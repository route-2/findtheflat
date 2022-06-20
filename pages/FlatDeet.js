import { Flex,Center,Divider, Box,ModalOverlay, Text,Input,Image,Select, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { ChevronLeftIcon,TriangleDownIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
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


const FlatDeet=()=>{
return(
<>
<Navbar/>
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
  <Button bg={'purple.200'}> Filter &nbsp; <TriangleDownIcon/> </Button>
  
  
  
  
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
 <Flex width={"50%"} borderwidth={'2px'} borderColor={'white'} flexDirection={'column'} > 
 
 <Flex  mt={'50px'} flexDirection={"row"} justifyContent={'space-between'}>
 <Flex textAlign={'center'} > <Image src='https://i.ibb.co/f4gLsDc/Sofa.png'/> <Text mt={'30px'} ml={'15px'} fontSize={'xl'}> Semi Furnished </Text> </Flex> <Divider orientation='vertical' />
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/VMC7c46/Apartment.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> 2 BHK </Text> </Flex> <Divider orientation='vertical' />
       
        
      </Flex>
      <Flex mt={'70px'} flexDirection={"row"} justifyContent={'space-between'}>
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/Bngkf7J/Vector.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> All </Text> </Flex> <Divider orientation='vertical' />
       <Flex textAlign={'center'} > <Image src='https://i.ibb.co/FWXmPjg/Lease.png'/> <Text mt={'30px'} fontSize={'xl'} ml={'15px'}> Ready to Move  </Text> </Flex> <Divider orientation='vertical' />

       
        
      </Flex>
      

 
 
 

 </Flex>
 <Flex mt={'40px'} flexDirection={'row'}  justifyContent={'space-between'}> <Button width={'250px'}  > Contact Owner </Button> 
 <Button borderwidth={'1px'} width={'50px'}  borderColor={'white'} variant={'outline'} > <Image src='https://i.ibb.co/h8yt49m/Vector-1.png'/></Button> <Divider orientation='vertical' />
 <Button borderwidth={'1px'} width={'50px'} borderColor={'white'} variant={'outline'} mr={'40px'}> <Image src='https://i.ibb.co/NWgrV9V/Location.png'/></Button>
 
 
 
 </Flex>
 
 
 
 
  </Flex>
  
  
  
  
  
  
  </Flex>
  </Center>







</>




)
};
export default FlatDeet;