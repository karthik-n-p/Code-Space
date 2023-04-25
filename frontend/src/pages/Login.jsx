import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  Heading,
  VStack
} from "@chakra-ui/react";
import Astronuat from '../assets/astronuat.png';

const LoginPage = () => {
  return (
    <Flex>
      {/* Left side of the page */}
      <Box
      bg="bg"
      height="100vh"
      width="100%"
      position="absolute"
      top={0}
      left={0}
    >
       
        <Text fontSize="lg" mt={4}>
          Please login or sign up to continue
        </Text>

        <Heading  color="#ffffff" p="150px 950px 649px 60px">
        How do you want to 
        use CodeSpace?
        </Heading>
        <Text color="#ffffff" fontSize="15px" pos={"absolute"} width="388.67px" height="22px" left="45px" top=" 320px">
          We'll personalize your setup experience accordingly.
          </Text>  
 

          <VStack spacing="10" pos={"absolute"} top="480px" left="70px">
               <Button bg="#ffffff" color="#1C1A25" width="350px"  height="90px" >
                  Student
               </Button>
              <Button bg="#ffffff"  color="#1C1A25" width="350px"  height="90px">
                  Admin
              </Button>
          </VStack>
      </Box>

      {/* Right side of the page */}
      <Box>
        <Image src={Astronuat} pos={"absolute"} width="700px"  height="600px" left="660px" top="80px"/>
      </Box>
    </Flex>
  );
};

export default LoginPage;
