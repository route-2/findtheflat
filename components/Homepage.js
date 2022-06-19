import Link from 'next/link';

import { Flex, Box, Text,Input,Image,Select, Button } from '@chakra-ui/react';
import Navbar from './Navbar';
import ChakraCarousel from "./ChakraCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons';

 const Homepage = () => {
  
return (
<>

<Flex flexDirection={"column"} justifyContent={"space-between"} padding={'10px'} > 

<Navbar/>
<Box mt={'10px'}>    
<CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0} >  <ButtonBack color={"black"}> <ChevronLeftIcon/> </ButtonBack> <Image width={'300px'} height={'200px'} src = {"https://picsum.photos/200/300/?blur"}  />   <Select width={"20px"} height={"10px"} placeholder='City'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>  
  </Slide>
          <Slide  index={1}  bg='https://picsum.photos/200/300/?blur' >  <ButtonBack color={"black"}> <ChevronLeftIcon/> </ButtonBack> <Image width={'300px'} height={'200px'} src = {"https://picsum.photos/200/300/?blur"} />
          <ButtonNext color={"black"}> <ChevronRightIcon/> </ButtonNext>
 </Slide>
          <Slide index={2}  bg='https://picsum.photos/200/300/?blur' >  <ButtonBack color={"black"}> <ChevronLeftIcon/> </ButtonBack> <Image width={'300px'} height={'200px'} src = {"https://picsum.photos/200/300/?blur"} />
   <ButtonNext color={"black"}> <ChevronRightIcon/> </ButtonNext></Slide>
        
   
        
        </Slider>
       
        
        
        
        
        
        
        
        
      
        
       
      </CarouselProvider>



  </Box>

 
      
      </Flex>
</>)
}
export default Homepage;
