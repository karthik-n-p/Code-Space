// This is the landing page for the app where user can login or signup
import React from 'react'
import { Box} from '@chakra-ui/react'
import Sidebar from '../components/landing-page/Navbar'
import Header from '../components/landing-page/header'

export default function Landing() {
  return (
    <Box bg="bg" w="100%" h="120vh">
          <Header/>
        <Sidebar/ >
    
    </Box>
  )
}
