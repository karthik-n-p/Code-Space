//Remove the alert and work on the forum page

import { Alert, AlertDescription, AlertIcon, AlertTitle, Flex,Box,CloseButton } from '@chakra-ui/react'
import React from 'react'


function Forum() {
 
  return (
    <div >
      <Flex justifyContent="center" alignItems="center" h="80vh" w="100%" >
      <Box p={4}>

        <Alert status="info" mb={4}>
          <AlertIcon />
          Forum is under development and coming soon.
          
        </Alert>
   

  
    </Box>

      </Flex>
      
    </div>
  )
}

export default Forum
