import Link from 'next/link';
import Login from './Login';
import { Flex, Box,ModalOverlay, Text,Input,Image,Select, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ChakraCarousel from "../components/ChakraCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect,useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ChevronLeftIcon,ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';
 const Homepage = () => {
    const items = [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
    
  
const url = 'https://findtheflat.online/'
const[output,setOutput]=useState([])       
 

useEffect(() => {axios.get(url).then(res=>{
  setOutput(res.data.data)
})})




console.log(output)
  
return (

<>

<Flex h={'100vh'} bgGradient='linear(purple.100 0%, orange.100 25%, yellow.100 50%)'  flexDirection={"column"}  padding={'10px'} > 

<Navbar/>
<Box mt={'90px'}>    
<Carousel>
        {items.map(item => <div key={item.id} ><img width={"300px"}  src="https://picsum.photos/600/500/?blur=2"/> </div>)}
      </Carousel>

  </Box>
  <Flex  mt={'40px'} flexDirection={"row"} justifyContent={'center'} > 
  <Select bg={"purple.200"} borderRadius={"22px"} boxShadow={"dark-lg"} placeholder='City' mr={'20px'}  variant={"filled"} width={"100px"}>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
  <Input bg={"purple.200"} placeholder='Search Locality/Landmark' borderRadius={"22px"} boxShadow={"dark-lg"} width={"500px"}/>
  <Button bg={"purple.200"} ml={'20px'} boxShadow={"dark-lg"} borderRadius={"22px"}> <SearchIcon/> Search </Button>
  </Flex>

 
      
      </Flex>
</>)
}
export default Homepage;
