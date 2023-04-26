import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider,Image } from '@chakra-ui/react';
import { MdHome, MdForum, MdDescription, MdStar, MdFeedback, MdInfo, MdUpgrade, MdWork, } from 'react-icons/md';
import { AiOutlineBulb } from 'react-icons/ai';
import { IconButton } from '@chakra-ui/react'
import Logo from '../../assets/logo.png';
import { FaLightbulb } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <Box pos={'fixed'} top="0" bg="rgba(13, 13, 13, 1)" boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)" width="260px" height="120vh" zIndex={100000} >
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
          <Box width="43px" height="38px" borderRadius="12px" bg="#32313B" display="flex" justifyContent="center" alignItems="center">
            <FaLightbulb  size="25px" color="#A0AEC0"/>
          </Box>

          <Text color="grey1" fontSize="xl">
            Practice
          </Text>
        </HStack>
        
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="#32313B" display="flex" justifyContent="center" alignItems="center" >
            <MdForum  color="#A0AEC0" size="25px"  />
          </Box>
          <Text color="grey1" fontSize="xl">
          Forum
          </Text>
        </HStack>
        
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="#32313B" display="flex" justifyContent="center" alignItems="center">
            <MdStar color="#A0AEC0" size="30px" />
          </Box>
          <Text color="grey1" fontSize="xl">
            Contest
          </Text>
        </HStack>
       
        <HStack spacing="20px" p="">
          <Box width="43px" height="38px" borderRadius="12px" bg="#32313B"  display="flex" justifyContent="center" alignItems="center">
            <MdDescription color="#A0AEC0" size="30px" />
          </Box>
          <Text color="grey1" fontSize="xl">
            Resources
          </Text>
        </HStack>
        {/* Add more navigation items here */}
      </VStack>
      <Divider orientation='horizontal' width="200px"  borderWidth="px" borderColor="grey"  marginLeft="30px" />
      <VStack spacing="10" alignItems="left" p="45px">
      <HStack spacing="20px" p="">
          <Box  width="43px" height="38px" borderRadius="12px"  bg="#32313B" display="flex" justifyContent="center" alignItems="center">
            <MdFeedback color="#A0AEC0" size="30px" />
          </Box>
          <Text color="grey1" fontSize="xl">
            Feedback
          </Text>
        </HStack>

        <HStack spacing="20px" p="">
          <Box  width="43px" height="38px" borderRadius="12px"  bg="#32313B" display="flex" justifyContent="center" alignItems="center">
            <MdInfo color="#A0AEC0" size="30px" />
          </Box>
          <Text color="grey1" fontSize="xl">
            About
          </Text>
        </HStack>

        </VStack>
    </Box>


  );
};

export default Sidebar;
