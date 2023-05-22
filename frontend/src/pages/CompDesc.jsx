import React from "react";
import Header from "../components/landing-page/header";
import Sidebar from "../components/landing-page/Navbar";
import CompDesc1 from "../components/landing-page/CompDescCom";
import { Box } from "@chakra-ui/react";

const CompDescription = () =>{
    return(
        <Box>
            <Header/>
            <Sidebar/>
            <CompDesc1 />
        </Box>
    );
};

export default CompDescription;