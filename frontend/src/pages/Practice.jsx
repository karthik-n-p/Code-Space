import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/landing-page/header";
import Sidebar from "../components/landing-page/Navbar";
import PracQues from "../components/landing-page/PracQues";

const PracticePage = () => {
    return (
        <Box bg="bg" w="100%" h="150vh">
        <Header/>
        <Sidebar/>
        
        <PracQues/>
        </Box>
        );
};

export default PracticePage;
