// This is the landing page for the app where user can login or signup
import React from 'react'
import { Box} from '@chakra-ui/react'
import Sidebar from '../components/landing-page/Navbar'
import Header from '../components/landing-page/header'
import Landingcards from '../components/landing-page/Landingcards'
import Enroll from '../components/landing-page/Enroll'
export default function Landing() {
  return (
    <Box bg="bg" w="100%" h="150vh">
       
          <Header/>
          <Sidebar/>
          <Landingcards/>
          <Enroll/>
       
    
    </Box>
  )
}
