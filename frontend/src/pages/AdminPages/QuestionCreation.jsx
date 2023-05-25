import React from 'react';
import { Box, Heading, Text, Button, VStack, HStack, Divider,Image, Icon,Input, InputGroup, IconButton, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CreateQuestionForm = () => {

    return (
        <Flex>
        <Heading pos="absolute" font-weight="bold" color="txtw" fontSize="4xl" p="10px 400px 55px 260px">
          Create Question
        </Heading>

        <Text color="grey1" fontSize={15} fontStyle={'italic'} left="360px" top="190px" pos="absolute">
          Get started by providing the initial details needed to create a challenge.
        </Text>

      {/* Challenge name */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="250px">
      Challenge Name
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="550px" top="260px">*
      </Box>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"238px"}} ml="50px" h="30px"  left="570px" top="155px" bg="#494853" borderWidth="0px" />
      </InputGroup>

       {/* Description */}
       <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="320px">
      Description
      </Heading>
      <InputGroup>
        <Input display="flex" width={{base:"238px",md:"500px"}} h="80px" left="335px" top="225px" bg="#494853" borderWidth="0px" />
      </InputGroup>

        {/* Problem Statement */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="420px">
      Problem Statement
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="585px" top="425px">*
      </Box>
      <InputGroup>
        <Input  display="flex" width={{base:"238px",md:"500px"}} h="80px" right="165px" top="320px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      {/* Input Format */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="520px">
      Input Format
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="515px" top="525px">*
      </Box>
      <InputGroup>
        <Input  position="absolute"  display="flex" width={{base:"238px",md:"500px"}} h="120px" right="210px" top="420px" bg="#494853" borderWidth="0px" />
      </InputGroup>  

       {/* Output Format */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="660px">
      Output Format
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="535px" top="665px">*
      </Box>
      <InputGroup>
        <Input position="absolute" display="flex" width={{base:"238px",md:"500px"}} h="120px" right="255px" top="560px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      {/* Constraints */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="810px">
      Constraints
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="495px" top="815px">*
      </Box>
      <InputGroup>
        <Input position="absolute" display="flex" width={{base:"238px",md:"500px"}} h="120px" right="300px" top="710px" bg="#494853" borderWidth="0px" />
      </InputGroup>

      {/* Tags */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="980px">
      Tags
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="420px" top="985px">*
      </Box>
      <InputGroup>
        <Input position="absolute" display="flex" width={{base:"238px",md:"500px"}} h="60px" right="345px" top="870px" bg="#494853" borderWidth="0px" />
      </InputGroup>  



      {/* Max Marks */}
      <Heading  color="txtw" fontSize="2xl" font-weight="semibold" pos="absolute" left="360px" top="1080px">
      Max Marks
      </Heading>
      <Box position="absolute"  transform="translate(35%, -35%)" color="red.500" left="490px" top="1080px">*
      </Box>
      <InputGroup>
        <Input position="absolute" display="flex" width={{base:"238px",md:"200px"}} h="70px" right="690px" top="990px" bg="#494853" borderWidth="0px" />
      </InputGroup>  

      {/* Buttons */}
      <Link to="/adminQuestion"><Button bg="btng" color="txtw" pos={'absolute'} left="370px" top="1180px">
        Save
      </Button></Link>
      <Link to="/adminquestion"><Button bg="btng" color="txtw" pos={'absolute'} left="470px" top="1180px">
        Cancel
      </Button></Link>
     






        </Flex>
    )
}

export default CreateQuestionForm