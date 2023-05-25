import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Box, Divider, HStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Icon, Flex, Collapse, useOutsideClick } from "@chakra-ui/react";
import { Link } from "react-router-dom";


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
          <Box borderWidth={1} borderRadius={10}
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
            <Box borderWidth={1} borderRadius={10}
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
  
  function Adminquestion(){
      return(
          <div>
             <Text fontWeight={"semibold"} fontSize={30} color={"white"} ml="280px"> Competitions</Text>
           <Box w="1200px" h="60px" mt="20px" bg="#353340" ml="280px" borderWidth={2}>
            <HStack w="1200px" pt="8px" spacing={10} ml="20px">
                <HStack w="600px" mb={2}>
                <Box w="200px" h="60px" pt="18px">
                <Link to="/admincompetition"><Text fontWeight={"semibold"} ml="10px">Manage Competitions</Text></Link>
                </Box>
                <Box bg="#1A202C" borderWidth={2} w="250px" h="40px" pt="8px" align="center" borderBottom={"none"}>
                    <Text fontWeight={"semibold"}>Manage Questions</Text>
                    
                </Box>
                </HStack>
                <HStack w="600px" justify={"flex-end"}>
                
                <InputGroup w="300px" mb={5}>
            <Input  display="flex"  placeholder="Search Questions" width="240px" ml="10px" h="30px"  mt="0px" bg="#1A202C" borderWidth="2px"  />
            <InputLeftElement ml="10px" pb={3}>
            <FaSearch color="grey" />
            </InputLeftElement>
        </InputGroup>
        </HStack>
            </HStack>
            <HStack w="1200px" spacing="580px" mt="20px">
            <Text fontWeight={"semibold"} fontSize={22} mt="10px" w="380px" >All Questions</Text>
            <Link to="/createques">
            <Box bg="#2EC866" w="220px" h="30px" paddingLeft={0} borderRadius={7} textAlign={"center"}>
                            <Text color="white" fontWeight={"bold"} paddingTop={1}>Create Question</Text>
                        </Box></Link>
            
            </HStack>

            <Box w="1200" h="50px" mt="10px">
                <HStack w="1200">
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Question Name</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Question No</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Max Marks</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Max Time</Text>
                    </Box>
                    <Box bg="#808191" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar/>
    
    
    
                    </Box>
                </HStack>
            </Box>

            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Test Mirror</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10001</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">20</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Reverse Age</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10002</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">15</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">20 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Roll A Dice</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10003</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">40</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">45 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Block Mahal</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10004</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">35 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Prime Addition</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10005</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">10</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">12 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Multiple Addition</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10006</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">20</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Frequency Calculator</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10007</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">30</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">43 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Block Wall</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10008</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">10</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">17 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Average Age</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10009</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">40</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">60 Mins</Text>
                    </Box>
                    <Box bg="#353340" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar2/>
    
    
    
                    </Box>
                </HStack>
            </Box>
            <Box w="1200" h="50px" mt="3px">
                <HStack w="1200">
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">U Turn</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Q10010</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">50</Text>
                    </Box>
                    <Box bg="#353340" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">110 Mins</Text>
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

export default Adminquestion;