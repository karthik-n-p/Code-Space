import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../components/landing-page/header";
import Sidebar from "../components/landing-page/Navbar";
import CompQues1 from "../components/landing-page/CompQuesCom";

const CompQuesPage = () =>{
    return(

        <Box>
            <Header/>
            <Sidebar/>
            <CompQues1/>
        </Box>
    );
};

export default CompQuesPage;