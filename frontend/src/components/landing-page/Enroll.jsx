import { Card, CardHeader, Flex, Image,Heading, CardBody ,Text, CardFooter,HStack, Button, Box, Icon} from '@chakra-ui/react'
import React from 'react'
import { FaClock } from 'react-icons/fa'

function Enroll() {
  return (
    <div>
        <Heading ml="280px" mt="40px" fontSize={35} fontWeight={500} color="white">Upcoming Competitions</Heading>
        <Flex position={'absolute'} top="670px" left="285px" gap={10}>
            {/* <Heading color="white">Upcoming Competitions</Heading> */}
            <Card  w="260px" h="310px" bg="#252836">
                <CardHeader p="0" >
                <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                        <FaClock color="white" ></FaClock>
                    <Text color="white" fontWeight={100}>4 Days</Text>
                    </Box>
                    <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                </CardHeader>
                <CardBody>
                    <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 1</Heading>
                    <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                    <HStack mt="20px" spacing={20}>
                        <Text color="#808191" fontSize={12} >52 Enrolled</Text>
                        <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                    </HStack>

                </CardBody>
              
            </Card>
            <Card  w="260px" h="310px" bg="#252836">
                <CardHeader pos="relative" p="0" >

                    <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                    <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                        <FaClock color="white" ></FaClock>
                    <Text color="white" fontWeight={100}>15 Days</Text>

                    </Box>
                </CardHeader>
                <CardBody>
                    <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 2</Heading>
                    <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                    <HStack mt="20px" spacing={20}>
                        <Text color="#808191" fontSize={12} >37 Enrolled</Text>
                        <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                    </HStack>

                </CardBody>
              
            </Card>
            <Card  w="260px" h="310px" bg="#252836">
                <CardHeader p="0" >
                <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                        <FaClock color="white" ></FaClock>
                    <Text color="white" fontWeight={100}>35 Days</Text>

                    </Box>
                    <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                </CardHeader>
                <CardBody>
                    <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 3</Heading>
                    <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                    <HStack mt="20px" spacing={20}>
                        <Text color="#808191" fontSize={12} >21 Enrolled</Text>
                        <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                    </HStack>

                </CardBody>
              
            </Card>
            <Card  w="260px" h="310px" bg="#252836">
                <CardHeader p="0" >
                <Box position={'absolute'} display={'flex'} bg="rgba(24, 27, 30, .5)" right="2px" top="5px"  w="120px" h="30px"  z-index="10" borderRadius={12} alignItems={'center'} justifyContent={"center"} gap="5px">
                        <FaClock color="white" ></FaClock>
                    <Text color="white" fontWeight={100}>44 Days</Text>

                    </Box>
                    <Image borderRadius="12px" src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/9608604.webp"></Image>
                </CardHeader>
                <CardBody>
                    <Heading color="#B7B9D2" fontSize="20px" fontWeight={'normal'}>Contest 4</Heading>
                    <Text color="white" lineHeight="18px" fontWeight={'normal'} fontSize={12} pt="10px">Learn if-else statements, recursion, data structures, oops and more.</Text>

                    <HStack mt="20px" spacing={20}>
                        <Text color="#808191" fontSize={12} >20 Enrolled</Text>
                        <Button bg="btng" color="white" fontSize={15} fontWeight={'normal'} >Enroll</Button>
                    </HStack>

                </CardBody>
              
            </Card>

        </Flex>
      
    </div>
  )
}

export default Enroll
