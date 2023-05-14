import React from 'react';
import { Box, Flex, Spacer, IconButton, Input, InputGroup, InputRightElement, Circle, useColorMode, Avatar, Button, HStack, Image,Heading } from '@chakra-ui/react';
import { FaSearch, FaSun, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get color mode (light or dark) and toggle function
  
  return (
    <Box pos="fixed" display="flex"   top="0" width="100%" zIndex={20}>
      <Flex align="center">

        {/* Logo */}
       
        <HStack alignItems="center" justify="center" width="300px" height="100px">
      <Image src={Logo} alt="hg" mr="-7px" mt="px" width="60px"  height="60px" />
      <Heading font-weight="bold" color="txtw" fontSize="3xl" p="40px 65px 35px 0px">
        CodeSpace
      </Heading>
      </HStack>
       
        <Box ml="130px" >
          <InputGroup>
            <Input  display="flex"  placeholder="Search" width={{base:"350px",md:"650px"}} ml="45px" h="50px"  bg="#494853" borderWidth="0px" />
            <InputRightElement mt="5px" >
               <FaSearch size="25px" color="grey2"/>
            </InputRightElement>
          </InputGroup>
        </Box>
        
        {/* Spacer */}
        <Spacer  />
        
        {/* Theme changer */}
        <Box>
          <Circle bg="#32313B"  mx={5} onClick={toggleColorMode} cursor="pointer">
            <IconButton icon={<FaSun size="25px" />}  w="45px" h="45px" borderRadius="100px" color="yellow" bg="#32313B" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
        
        {/* Profile icon */}
        <Box>
          <Circle  mx={-2} mr="10px" onClick={toggleColorMode} cursor="pointer">
            <IconButton icon={<FaUser size="25px"  />}  w="45px" h="45px" borderRadius="100px" color="btng" bg="#32313B" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
        
        {/* Signup/Login buttons */}
        <Box>
          <HStack spacing={2}>
            <Link to="/login">
            <Button color="black" bg="white" mx="5" >Signup</Button>
            </Link>
            <Button bg="btng" color="black">Login</Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;