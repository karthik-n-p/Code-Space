// This is the landing page for the app where user can login or signup
import React from 'react'
import { Box, Grid, GridItem} from '@chakra-ui/react'
import Sidebar from '../../components/landing-page/Navbar'
import Header from '../../components/landing-page/header'
import Landingcards from '../../components/landing-page/Landingcards'
import Enroll from '../../components/landing-page/Enroll'
import AuthContext from './AuthContext'
import Profile from '../../components/landing-page/Profile'

export default function Landing() {
  const { isRegistered } = React.useContext(AuthContext);
  console.log("Inside landing.jsx isRegistered: ",isRegistered)
  return (
    <Box  w="100%" h="130vh">

          {isRegistered?<Profile/>:<Landingcards/>}

          <Enroll/>

    </Box>
  )
}
