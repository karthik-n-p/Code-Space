import React from "react";
import { Box, Divider, HStack, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { FaBars, FaIcons, FaSearch } from "react-icons/fa";

import { useState } from "react";
import { Icon, Flex, Collapse, useOutsideClick } from "@chakra-ui/react";


const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = React.useRef();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useOutsideClick({
    ref: menuRef,
    handler: handleCloseMenu,
  });



  return (
    <Flex align="center" ml="25px">
      <Icon
        as={FaBars}
        boxSize={6}
        cursor="pointer"
        onClick={handleMenuToggle}
      />
      <Collapse in={isMenuOpen} animateOpacity>
        <Box borderWidth={1}
          bg="#808191"
          p={4}
          position="absolute"
          top="auto"  // Set top to "auto" to let the box position itself naturally below the icon
          bottom="auto"  // Position the box at the bottom
          right={0}
          zIndex={10}
        >
          {/* Menu content goes here */}
          
          <p>Delete All</p>
          
        </Box>
      </Collapse>
    </Flex>
  );
}

const MenuBar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = React.useRef();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useOutsideClick({
    ref: menuRef,
    handler: handleCloseMenu,
  });

  
    return (
      <Flex align="center" ml="25px">
        <Icon
          as={FaBars}
          boxSize={6}
          cursor="pointer"
          onClick={handleMenuToggle}
        />
        <Collapse in={isMenuOpen} animateOpacity>
          <Box borderWidth={1}
            bg="#353340"
            p={4}
            position="absolute"
            top="auto"  // Set top to "auto" to let the box position itself naturally below the icon
            bottom="auto"  // Position the box at the bottom
            right={0}
            zIndex={10}
          >
            {/* Menu content goes here */}
            <p>Edit</p>
                      <Divider borderColor={"#808191"} width={50}/>
            <p>Delete</p>
            
          </Box>
        </Collapse>
      </Flex>
    );
  }

function Admincomp(){
    return(
        <div>
           <Text fontWeight={"semibold"} fontSize={30} color={"white"} ml="280px"> Competitions</Text>
           <Box w="1200px" h="60px" mt="20px" bg="#353340" ml="280px" borderWidth={2}>
            <HStack w="1200px" pt="8px" spacing={10} ml="20px">
                <HStack w="600px" mb={2}>
                <Box bg="#1A202C" borderWidth={2} w="250px" h="40px" pt="8px" align="center" borderBottom={"none"}>
                    <Text fontWeight={"semibold"}>Manage Competitions</Text>
                </Box>
                <Box w="200px" h="60px" pt="18px">
                <Text fontWeight={"semibold"} ml="10px">Manage Questions</Text>
                </Box></HStack>
                <HStack w="600px" justify={"flex-end"}>
                
                <InputGroup w="300px" mb={5}>
            <Input  display="flex"  placeholder="Search Competitions" width="240px" ml="10px" h="30px"  mt="0px" bg="#1A202C" borderWidth="2px"  />
            <InputLeftElement ml="10px" pb={3}>
            <FaSearch color="grey" />
            </InputLeftElement>
        </InputGroup>
        </HStack>
            </HStack>
            <HStack w="1200px" spacing="600px" mt="20px">
            <Text fontWeight={"semibold"} fontSize={22} mt="10px" w="380px" >Ongoing Competitions</Text>
            
            </HStack>

            <Box w="1200" h="50px" mt="10px">
                <HStack w="1200">
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competiiton Name</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competition No</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Start Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Participants</Text>
                    </Box>
                    <Box bg="#808191" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Number Mirror</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1011</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">21-Aug-2023</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">42</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Age Limit</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1012</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">14-Sep-2023</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">32</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Good Turn</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1013</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30-Oct-2023</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">21</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <HStack w="1200px" spacing="570px" mt="20px">
            <Text fontWeight={"semibold"} fontSize={22} mt="10px" w="380px" >Upcomming Competitions</Text>
            <Box bg="#2EC866" w="220px" h="30px" paddingLeft={0} borderRadius={7} textAlign={"center"}>
                            <Text color="white" fontWeight={"bold"} paddingTop={1}>Create Competiiton</Text>
                        </Box>
            </HStack>

            <Box w="1200" h="50px" mt="10px">
                <HStack w="1200">
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competiiton Name</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competition No</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Start Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Time</Text>
                    </Box>
                    <Box bg="#808191" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Add Two Numbers</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1014</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">20-Dec-2023</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Blockify</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1015</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">31-Jan-2024</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Saving Taxes</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1016</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">24-Feb-2024</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Fitness</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1017</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">14-Mar-2024</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Squats</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1018</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30-Mar-2024</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Boundary Maker</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">P1016</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">11-Apr-2024</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">09:30 AM</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>


           </Box>
            
        </div>
    )
}

export default Admincomp;