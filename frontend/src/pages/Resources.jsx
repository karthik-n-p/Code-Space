import React from 'react'
import { Box} from '@chakra-ui/react'
import ResourceNavbar from '../components/resource-page/ResourceNavbar'
import ResourceHeader from '../components/resource-page/ResourceHeader'
import Coursecards from '../components/resource-page/Coursecards'


export default function Resources() {
  return (
    <Box bg="bg" w="100%" h="180vh">
        
          <ResourceNavbar/>
          <ResourceHeader/> 
          <Coursecards />
       
    </Box>
  )
}