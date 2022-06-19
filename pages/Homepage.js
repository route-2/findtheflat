import Link from 'next/link';

import { Flex, Box, Text,Input,Image,Select, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ChakraCarousel from "../components/ChakraCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons';
import Carousel from 'react-elastic-carousel';
 const Homepage = () => {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }
  const { items } = this.state;
return (
<>

<Flex flexDirection={"column"} justifyContent={"space-between"} padding={'10px'} > 

<Navbar/>
<Box mt={'10px'}>    
<Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>

  </Box>

 
      
      </Flex>
</>)
}
export default Homepage;
