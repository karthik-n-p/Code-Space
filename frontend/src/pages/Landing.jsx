// This is the landing page for the app where user can login or signup
import React from 'react'
import { Box} from '@chakra-ui/react'
import Sidebar from '../components/landing-page/Navbar'
import Header from '../components/landing-page/header'
import Landingcards from '../components/landing-page/Landingcards'
import Enroll from '../components/landing-page/Enroll'
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <Box bg="bg" w="100%" h="150vh">
           <Link to="/login">
          <Header/>
          </Link>
          <Sidebar/>
          <Landingcards/>
          <Enroll/>
       
    
    </Box>
  )
}
