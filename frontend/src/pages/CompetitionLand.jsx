import React from "react";
import Header from "../components/landing-page/header";
import Sidebar from "../components/landing-page/Navbar";
import { Box } from "@chakra-ui/react";
import CompFun from "../components/landing-page/CompComponent";

const CompComponent = () => {
    return(
        <Box>
        <Header/>
        <Sidebar/>
        <CompFun />
        </Box>
    );
};

export default CompComponent;