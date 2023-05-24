import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Divider,Image, Icon,Input, InputGroup, IconButton, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CreateCompetitionForm = () => {

    return (
        <div>
      <Flex>
      <Heading pos="absolute" font-weight="bold" color="txtw" fontSize="4xl" p="10px 400px 55px 260px" h="100px">
        Create Competition
      </Heading>
      
      <Text color="grey1" fontSize={15} fontStyle={'italic'} left="360px" top="180px" pos="absolute">
      Host your own coding contest on CodeSpace. You can practice and compete with friends from your</Text>
      <Text color="grey1" fontSize={15} fontStyle={'italic'} pos="absolute" left="360px" top="200px"> 
      organization or school. Select from our library of over  coding challenges or create your own.</Text>
      <Text color="grey1"fontSize={15}  fontStyle={'italic'} pos="absolute" left="360px" top="220px">
      Get started by providing the initial details for your contest.
      </Text>

      {/* Competition name */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="300px">
       Competition Name
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="580px" top="310px">*
      </Box>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} ml="50px" h="30px"  left="590px" top="205px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      {/* Start time */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="360px">
       Start Time
      </Heading> 
       <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="485px" top="370px">*
       </Box>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} h="30px"  left="350px" top="265px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      <Text pos={'absolute'} color="txtw" right="530px" top="370px">at</Text>

      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} h="30px"  left="550px" top="265px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      <Text pos={'absolute'} color="txtw" right="120px" top="370px">IST</Text>

      {/* End time */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="420px">
       End Time
      </Heading> 
       <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="472px" top="430px">*
       </Box>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} h="30px" right="125px" top="325px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      <Text pos={'absolute'} color="txtw" right="530px" top="430px">at</Text>

      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} h="30px"  left="75px" top="325px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      <Text pos={'absolute'} color="txtw" right="120px" top="430px">IST</Text>

      {/* Description */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="500px">
      Description
      </Heading>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"600px"}} h="250px" right="595px" top="410px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      <Link to="/admincomp">
      <Button bg="btng" color="txtw" pos={'absolute'} left="360px" top="810px">
        Create
      </Button></Link>
      <Link to="/admincomp">
      <Button bg="btng" color="txtw" pos={'absolute'} left="500px" top="810px">
        Cancel
      </Button></Link>
 
  </Flex>
  </div>


    )
}

export default CreateCompetitionForm

