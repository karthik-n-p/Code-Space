import React from 'react';
import { Box, Flex, Spacer, IconButton, Input, InputGroup, InputRightElement, Circle, useColorMode, Avatar, Button, HStack } from '@chakra-ui/react';
import { FaSearch, FaSun, FaUser } from 'react-icons/fa';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Hook to get color mode (light or dark) and toggle function
  
  return (
    <Box pos="absolute" top="0" width="100%" height="100px"  bg="gray.100" boxShadow="md" p={4} zIndex="0">
      <Flex align="center">
        {/* Search bar */}
        <Box>
          <InputGroup>
            <Input placeholder="Search" />
            <InputRightElement>
              <IconButton icon={<FaSearch />} aria-label="Search" />
            </InputRightElement>
          </InputGroup>
        </Box>
        
        {/* Spacer */}
        <Spacer />
        
        {/* Theme changer */}
        <Box>
          <Circle size="40px" bg="yellow.300" mx={2} onClick={toggleColorMode} cursor="pointer">
            <IconButton icon={<FaSun />} colorScheme="gray" size="md" aria-label="Toggle theme" />
          </Circle>
        </Box>
        
        {/* Profile icon */}
        <Box>
          <Circle size="40px" bg="gray.300" mx={2}>
            <Avatar icon={<FaUser />} bg="transparent" />
          </Circle>
        </Box>
        
        {/* Signup/Login buttons */}
        <Box>
          <HStack spacing={4}>
            <Button colorScheme="teal" variant="outline">Sign up</Button>
            <Button colorScheme="teal">Login</Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;