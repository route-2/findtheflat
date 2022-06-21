import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { RentalProvider } from '../components/Rent.context.tsx'

function MyApp({ Component, pageProps }) {
   
  return (<RentalProvider><ChakraProvider> <Component {...pageProps} />
  </ChakraProvider></RentalProvider>)
}

export default MyApp
