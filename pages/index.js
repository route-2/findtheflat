import Link from 'next/link'
import Image from 'next/image'
import {Flex,Box,Text,Button} from '@chakra-ui/react'




const Banner = (purpose) => (
<Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10"> 

{purpose}


</Flex>



)

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner purpose={'For Sale'}/>
      <Banner purpose={'For Rent'}/>

    </div>
  )
}
