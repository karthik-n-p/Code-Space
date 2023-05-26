import React from "react";
import { Box, Divider, HStack, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { FaBars, FaSearch } from "react-icons/fa";

import { useState } from "react";
import { Icon, Flex, Collapse, useOutsideClick } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';



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

const MenuBar2 = ({competitionId}) => {
  console.log("competitionId", competitionId);
  
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

  
  const navigate = useNavigate();
  const handledlt = () => {
  
    axios
    .delete(`http://localhost:3000/delete-competition/${competitionId}`)
    .then((response) => {
      console.log("response.data", response.data);
    }
    )
    .catch((error) => {
      console.log(error);
    });
    navigate('/admincompetition')
    setIsMenuOpen(!isMenuOpen);
  }






 

  
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
            <p onClick={handledlt}>Delete</p>
            
          </Box>
        </Collapse>
      </Flex>
    );
  }
  
  function calculateDaysLeft(targetDate) {
    const today = moment();
    const daysLeft = targetDate.diff(today, 'days');
    return daysLeft;
  }
  

const Competition = () => {
  
  
  const [ongoingCompetitions, setOngoingCompetitions] = useState([]);
  const [upcomingCompetitions, setUpcomingCompetitions] = useState([]);

  // Modify your useEffect callback function
useEffect(() => {
  // Fetch upcoming competitions
  axios
    .get("http://localhost:3000/get-upcoming-competitions")
    .then((response) => {
      console.log("response.data", response.data);
      const upcomingCompetitionsArray = response.data.upcomingCompetitions;
      console.log("upcomingCompetitionsArray", upcomingCompetitionsArray);

      // Assuming the first array contains the competitions
      if (upcomingCompetitionsArray.length > 0) {
        const firstCompetitionName = upcomingCompetitionsArray[0].competitionName;
        console.log("First Competition Name:", firstCompetitionName);
      }

      setUpcomingCompetitions(upcomingCompetitionsArray);
    })
    .catch((error) => {
      console.log(error);
    });

  // Remaining code...
}, []);

const handleCompetitionDeleted = (competitionId) => {
  // Update the state to remove the deleted competition
  setUpcomingCompetitions((prevCompetitions) =>
    prevCompetitions.filter((comp) => comp.competitionId !== competitionId)
  );
};
const today= moment();



  return (
<div>

 <Text fontWeight={"semibold"} fontSize={30} color={"white"} ml="280px"> Competitions</Text>
           <Box w="1200px" h="60px" mt="20px" bg="#353340" ml="280px" borderWidth={2}>
            <HStack w="1200px" pt="8px" spacing={10} ml="20px">
                <HStack w="600px" mb={2}>
                <Box bg="#1A202C" borderWidth={2} w="250px" h="40px" pt="8px" align="center" borderBottom={"none"}>
                <Link to="/admincompetition">    <Text fontWeight={"semibold"}>Manage Competitions</Text> </Link>
                </Box>
                <Box w="200px" h="60px" pt="18px">
                <Link to="/adminquestion"><Text fontWeight={"semibold"} ml="10px">Manage Questions</Text></Link>
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
            <Text fontWeight={"semibold"} fontSize={22} mt="10px" w="380px" >Active Competitions</Text>
            <Link to="/createcomp">
            <Box bg="#2EC866" w="220px" h="30px" paddingLeft={0} borderRadius={7} textAlign={"center"}>
                            <Text color="white" fontWeight={"bold"} paddingTop={1}>Create Competition</Text>
                        </Box></Link>
            
            </HStack>
            <Box w="1200" h="50px" mt="10px">
                <HStack w="1200">
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competition Name</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Start Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">End Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Participants</Text>
                    </Box>
                    <Box bg="#808191" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar/>
    
    
    
                    </Box>
                </HStack>
            </Box>
             
           
            {upcomingCompetitions
        .filter(competition => moment(competition.startDate).isBefore(today))
        .map(competition => (
            
             
            
              <Box key={competition.id} w="1200px">
                <HStack>
                  <Box
                    bg="#353340"
                    w="270px"
                    h="50px"
                    borderWidth={2}
                    align="center"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize={18}
                      mt="10px"
                      w="270px"
                      color="white"
                    >
                      {competition.competitionName}
                    </Text>
                  </Box>
                  <Box
                    bg="#353340"
                    w="270px"
                    h="50px"
                    borderWidth={2}
                    align="center"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize={18}
                      mt="10px"
                      w="270px"
                      color="white"
                    >
                      {competition.startDate}
                    </Text>
                  </Box>
                  <Box
                    bg="#353340"
                    w="270px"
                    h="50px"
                    borderWidth={2}
                    align="center"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize={18}
                      mt="10px"
                      w="270px"
                      color="white"
                    >
                      {competition.endDate}
                    </Text>
                  </Box>
                  <Box
                    bg="#353340"
                    w="270px"
                    h="50px"
                    borderWidth={2}
                    align="center"
                  >
                    <Text
                      fontWeight="semibold"
                      fontSize={18}
                      mt="10px"
                      w="270px"
                      color="white"
                    >
                      {competition.participants !== null && competition.participants !== undefined ? competition.participants : 0}
                    </Text>
                  </Box>
                  <Box
                    bg="#353340"
                    w="70px"
                    h="50px"
                    borderWidth={2}
                    align="center"
                    paddingTop={3}
                  >
                  <MenuBar2 competitionId={competition.competitionId} onCompetitionDeleted={handleCompetitionDeleted}/>
                  </Box>
                </HStack>
                <Divider mt={2} />
              </Box>
              
            ))}

<HStack w="1200px" spacing="600px" mt="20px">
            <Text fontWeight={"semibold"} fontSize={22} mt="10px" w="380px" >Upcomming Competitions</Text>
            
            
            </HStack>
            <Box w="1200" h="50px" mt="10px">
                <HStack w="1200">
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Competition Name</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Start Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">End Date</Text>
                    </Box>
                    <Box bg="#808191" w="270px" h="50px" borderWidth={2} align="center">
                    <Text fontWeight={"semibold"} fontSize={18} mt="10px" w="270px">Starts In</Text>
                    </Box>
                    <Box bg="#808191" w="70px" h="50px" borderWidth={2} align="center" paddingTop={3}>
                        <MenuBar/>
    
    
                    </Box>
                </HStack>
            </Box>
            
             
           
            {upcomingCompetitions
        .filter(competition => moment(competition.startDate).isAfter(today))
        .map(competition => {
  const startDate = moment(competition.startDate);
  const today = moment();
  const daysLeft = startDate.diff(today, 'days');

  return (
    <Box key={competition.id} w="1200px">
      <HStack>
        <Box
          bg="#353340"
          w="270px"
          h="50px"
          borderWidth={2}
          align="center"
        >
          <Text
            fontWeight="semibold"
            fontSize={18}
            mt="10px"
            w="270px"
            color="white"
          >
            {competition.competitionName}
          </Text>
        </Box>
        <Box
          bg="#353340"
          w="270px"
          h="50px"
          borderWidth={2}
          align="center"
        >
          <Text
            fontWeight="semibold"
            fontSize={18}
            mt="10px"
            w="270px"
            color="white"
          >
            {competition.startDate}
          </Text>
        </Box>
        <Box
          bg="#353340"
          w="270px"
          h="50px"
          borderWidth={2}
          align="center"
        >
          <Text
            fontWeight="semibold"
            fontSize={18}
            mt="10px"
            w="270px"
            color="white"
          >
            {competition.endDate}
          </Text>
        </Box>
        <Box
          bg="#353340"
          w="270px"
          h="50px"
          borderWidth={2}
          align="center"
        >
          <Text
            fontWeight="semibold"
            fontSize={18}
            mt="10px"
            w="270px"
            color="white"
          >
            {daysLeft} days left
          </Text>
        </Box>
        <Box
          bg="#353340"
          w="70px"
          h="50px"
          borderWidth={2}
          align="center"
          paddingTop={3}
        >
          <MenuBar2 competitionId={competition.competitionId} onCompetitionDeleted={handleCompetitionDeleted}/>
        </Box>
      </HStack>
      <Divider mt={2} />
    </Box>
  );
})}










          </Box>
        

    

</div>
  );
};

export default Competition;
