import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  Heading
} from "@chakra-ui/react";

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

        <Heading  color="#ffffff" p="150px 970px 649px 55px">
          How do you want to 
          use CodeSpace?
          </Heading>
        <Text color="#ffffff" fontSize="xl" width="388.67px" height="22px" left="-138px" top=" 163px" mt="20px">
          We’ll personalize your setup experience accordingly.
          </Text>  




          <Stack direction="column" spacing={4} p="200px 970px 649px 55px">
               <Button bg="#ffffff" color="#1C1A25" width="450px"  height="94.78px" >
                  Student
               </Button>
              <Button bg="#ffffff"  color="#1C1A25" width="450px"  height="94.78px">
                  Admin
              </Button>
          </Stack>






        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={8}>
          <Button colorScheme="blue" size="lg">
            Login
          </Button>
          <Button colorScheme="green" size="lg">
            Sign up
          </Button>
        </Stack>
        <Box mt={8}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Are you a student or admin?
          </Text>
        </Box>
      </Box>

      {/* Right side of the page */}
      <Box w={{ base: "100%", md: "50%" }}>
        <Image src="https://source.unsplash.com/random/600x800" w="100%" />
      </Box>
    </Flex>
  );
};

export default LoginPage;
