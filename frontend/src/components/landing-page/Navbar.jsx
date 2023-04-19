import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider,Image } from '@chakra-ui/react';
import { MdHome, MdForum, MdDescription, MdStar, MdFeedback, MdInfo } from 'react-icons/md';
import { AiOutlineBulb } from 'react-icons/ai';
import Logo from '../../assets/logo.png';
const Sidebar = () => {
  return (
    <Box pos={'absolute'} top="0" bg="rgba(13, 13, 13, 0.2)" boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)" width="260px" height="120vh" zIndex={330} >
      <HStack alignItems="center" justify="center" width="300px" height="100px">
      <Image src={Logo} alt="hg" mr="-7px" mt="px" width="60px"  height="60px" />
      <Heading font-weight="bold" color="txtw" fontSize="3xl" p="40px 65px 35px 0px">
        CodeSpace
      </Heading>
      </HStack>
      <VStack spacing="10" alignItems="left" p="45px">
        <HStack spacing="20px">
          <Box width="43px" height="38px" borderRadius="12px" bg="btng" display="flex" justifyContent="center" alignItems="center">
            <MdHome color="white" size="30px" />
          </Box>
          <Text color="txtw" fontSize="xl">
            Home
          </Text>
        </HStack>
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <AiOutlineBulb color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
            Practice
          </Text>
        </HStack>
        
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <MdForum color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
          Forum
          </Text>
        </HStack>
        
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <MdStar color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
            Contest
          </Text>
        </HStack>
       
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <MdDescription color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
            Resources
          </Text>
        </HStack>
        {/* Add more navigation items here */}
      </VStack>
      <Divider orientation='horizontal' width="200px"  borderWidth="px" borderColor="grey"  marginLeft="30px" />
      <VStack spacing="10" alignItems="left" p="45px">
      <HStack spacing="20px" p="">
          <Box  width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <MdFeedback color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
            Feedback
          </Text>
        </HStack>

        <HStack spacing="20px" p="">
          <Box  width="43px" height="38px" borderRadius="12px" bg="btngrey" display="flex" justifyContent="center" alignItems="center">
            <MdInfo color="txtdg" size="30px" />
          </Box>
          <Text color="txtdg" fontSize="xl">
            About
          </Text>
        </HStack>

        </VStack>
    </Box>


  );
};

export default Sidebar;
