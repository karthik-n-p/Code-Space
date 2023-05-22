import React from 'react';
import { Box, Text, Flex, Spacer, IconButton, Input, InputGroup, InputRightElement, Circle, useColorMode, Avatar, Button, HStack, Image,Heading } from '@chakra-ui/react';
import { FaSearch, FaSun, FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';
import { ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, BellIcon} from "@chakra-ui/icons";

const ResourceHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get color mode (light or dark) and toggle function
  
  return (
    <Box pos="fixed" display="flex"   top="0" width="100%" zIndex={20}>
      <Flex align="center">

        <Box ml="130px">
          <InputGroup>
            <Input  display="flex"  placeholder="Search" width={{base:"350px",md:"650px"}} ml="45px" h="40px"  left="150px" top="25px" bg="#494853" borderWidth="0px" />
            <InputRightElement left="800px" mt="23px" >
               <FaSearch size="20px" color="grey2"/>
            </InputRightElement>
          </InputGroup>
        </Box>
        
     
        
        {/* Theme changer */}
        <Box >
          <Circle mx={5} onClick={toggleColorMode} cursor="pointer">
            <IconButton  left="150px" top="25px" icon={<FaSun size="20px" />}  w="30px" h="40px" borderRadius="100px" color="yellow" bg="#32313B" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
        
        {/* Profile icon */}
        <Box>
          <Circle mx={-2} mr="10px"  cursor="pointer">
            <IconButton left="155px" top="25px" icon={<FaUser size="20px"  />}  w="30px" h="40px" borderRadius="100px" color="btng" bg="#32313B" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
    
        <Text cursor="pointer" pos={'fixed'} ml="1120px" top="35px"  color="grey1">Dark Knight<ChevronDownIcon /></Text>
      
        <Box>
          <Circle   cursor="pointer">
            <IconButton left="300px" top="25px" icon={<BellIcon size="25px"  />}  w="40px" h="40px" borderRadius="100px" color="btng" bg="#32313B" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
        
      </Flex>
    </Box>
  );
};

export default ResourceHeader;
