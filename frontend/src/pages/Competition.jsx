import React from "react";
import Header from "../components/landing-page/header";
import CompCom from "../components/landing-page/Compbar";
import { Box } from "@chakra-ui/react";

const CompPage = () => {
    return (
        <Box w="100%">
        <Header/>
        <CompCom/>
        </Box>
        );
};

export default CompPage;