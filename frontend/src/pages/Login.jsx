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
  VStack,
  Icon, 
  HStack
} from "@chakra-ui/react";
import Astronuat from '../assets/astronuat.png';
import Star from '../assets/star.png';
import { FaArrowRight } from "react-icons/fa";
// import { FaCamera, FaCircle } from "react-icons/fa";

const LoginPage = () => {
  return (
    <Flex>
      <Box bg="bg" height="100vh" width="100%" position="fixed" top={0} left={0}>

      <Box>
      <HStack spacing={2}>
      <Heading  pos={"absolute"} left="80px" top="120px" color="txtw" fontSize="3xl">
        CodeSpace
      </Heading>
      <Box w={5} h={6}  pos={"absolute"} bg="green.500" left="230px" top="128px"/>
      </HStack> 
      </Box>

      <Heading  color="#ffffff" textAlign="left" p="260px 950px 650px 80px">
        How do you want to
        use CodeSpace?
      </Heading>
      <Text color="#ffffff" fontSize="15px" pos={"absolute"} width="390px" height="22px" left="65px" top=" 380px">
        We'll personalize your setup experience accordingly.
      </Text>  
 

      <VStack spacing="10" pos={"absolute"} top="480px" left="80px">
               
        <Button  bg="#ffffff" color="#1C1A25" width="300px"  height="70px">
        <Box>
        
        {/* <Icon as={FaArrowRight} boxSize={6} viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
        </Icon> */}
        <VStack justifyContent="flex-start">
          <Text  >I'm a Student</Text>
          <Text>Want to join community.</Text>
        </VStack>
      
        </Box>
        </Button>

        <Button bg="#ffffff"  color="#1C1A25" width="300px"  height="70px">
        <Box>
        <VStack>
          <Text>I'm Admin</Text>
          <Text>Gained admin control code.</Text>
        </VStack>
        </Box>
        </Button>
      </VStack>
      </Box>
      {/* Right side of the page */}
      <Box>
        <Image src={Star} pos={"absolute"} width="137px" height="156px" left="699.63px" top="84.5px" />
        <Image src={Star} pos={"absolute"} width="104.55px" height="115.56px" left="1137px" top="102.99px"/>
      </Box> 
      
      <Box>
        <Image src={Astronuat} pos={"absolute"} width="700px"  height="600px" left="660px" top="80px"/>
      </Box>
    </Flex>
  );
};

export default LoginPage;
