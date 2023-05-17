import React from 'react'
import { Box} from '@chakra-ui/react'
import Sidebar from '../components/landing-page/Navbar';
import Header from '../components/landing-page/header';
import Sec1 from '../components/landing-page/1stpage_sec1';

const FirstPage = () => {
    return (
        <Box bg="bg" w="100%" h="150vh">
            <Sidebar/>
            <Header/>
            <Sec1 />
        </Box>
        
        );
};

export default FirstPage;