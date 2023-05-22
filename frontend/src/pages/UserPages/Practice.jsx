import { Box, Divider, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, Radio, RadioGroup, Select, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowDown, FaArrowUp, FaChevronCircleDown, FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
const PracQues = () => {
    return (
        <HStack alignItems={'flex-start'} gap="20px" >
        <div>
        <Text fontSize={20} fontWeight={"normal"} mt="50px" ml="175px">Topics</Text>
       <Box pos={'flex'}  ml="100px" bg="#1D1E23" boxShadow="inset 0px 4px 4px rgba(0, 0, 0, 0.25)" width="260px"  zIndex={200000} >
       <InputGroup>
            <Input  display="flex"  placeholder="Search Problems" width="240px" ml="10px" h="25px"  mt="10px" bg="#1D1E23" borderWidth="2px"  />
            <InputLeftElement ml="5px">
            <FaSearch color="grey"/>
            </InputLeftElement>
        </InputGroup>
        <Text mt="10px" fontSize={22} ml="20px" fontWeight={"semibold"}> Select Topic</Text>
        <RadioGroup >
        <Stack direction="column" spacing={3} mt="15px" ml="10px">
            <Radio value="option1">Basic Programming</Radio>
            <Radio value="option2">Arrays</Radio>
            <Radio value="option3">Strings</Radio>
            <Radio value="option4">Math</Radio>
            <Radio value="option5">Sorting</Radio>
            <Radio value="option6">Binary Search</Radio>
            <Radio value="option7">Data Structures</Radio>
            <Radio value="option8">Greedy Algorithms</Radio>
            <Radio value="option9">Dynamic Programming</Radio>
            <Radio value="option10">Graphs</Radio>
            <Radio value="option11">Segment Trees</Radio>
            </Stack>       
         </RadioGroup>

        </Box> 
       </div>
       <div>
        <Box bg="#47CF73" h="45px" mt="10px" >
            <HStack display='flex' justifyContent={"space-between"} alignItems={'center'} w="1050px"  px="20px" h="45px">
                <Text fontSize={16} > Topic</Text>
                <Text  fontSize={16} > Name</Text>
                <Text  fontSize={16} > Submission</Text>
                <Flex alignItems={"center"}>
                <Text  mr={1} >Difficulty</Text> 
                <FaArrowUp  color="white" size={16}/>
                </Flex>
                <Text  fontSize={16} ml="10px"> Avg Time</Text>
            </HStack>
        </Box>
        <Link to="/question">
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >01</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Easy</Text>
                </Flex>
               
                
                   <Flex alignItems={"center"} gap="2">
                   <Text  fontSize={15}  > 10 Mins</Text>
                   <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
                
            </HStack>
            <Divider />
        </Box>
        </Link>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >02</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Easy</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 4 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >03</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >26</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Easy</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 16 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >04</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >20</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Medium</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 30 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >05</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >40</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Medium</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 40 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >06</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Difficult</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 50 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >07</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >48</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Difficult</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 40 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >08</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Difficult</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 50 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>

        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >09</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Easy</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 4 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>

        <Box bg="#1D1E23"  >
        <HStack display='flex'  justifyContent={"space-between"} alignItems={'center'} w="1050px"  p="20px" >
               <Flex ml="10px"  w="100px" display="flex"  >
                    <Text  fontSize={15} >10</Text>
                </Flex>
                <Flex ml="10px" w="230px"  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15} color="#5780B0"  >Number Mirror</Text>
                </Flex>
                <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >28</Text>
                </Flex>
                 <Flex w="200px" bg=""  alignItems={"center"} justifyContent={'left'} px="10">
                <Text  fontSize={15}  >Easy</Text>
                </Flex>
                <Flex alignItems={"center"} gap="2">
                <Text  fontSize={15}  > 4 Mins</Text>
                <FaArrowRight color="#5780B0" size={16}/>
                </Flex>
            </HStack>
            <Divider />
        </Box>
       
        <Box  display="flex" w="1050px"  justifyContent={'end'} mt="0px" p="10px">
            <HStack  >
                <Text fontSize={12} color={"grey"} w="105px" >Jump to Page:</Text>
                <Select placeholder="01" w="50px"  display={"flex"} color={"grey"} size={12}>
            <option value="option1">02</option>
            <option value="option2">03</option>
            <option value="option3">04</option>
            </Select>
            <Text fontSize={12} color={"grey"} w="105px" paddingLeft={5} >01-10 of 100</Text>
            <Box w="40px" ><MdChevronLeft size="50px"/></Box>
            <Box w="40px" ><MdChevronRight size="50px"/></Box>
            </HStack>
            
        </Box>
     
       </div>
       </HStack>
        );
};



export default PracQues