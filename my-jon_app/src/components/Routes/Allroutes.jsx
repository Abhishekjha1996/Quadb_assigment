import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import SignUp from "../Login/SignUp";
import SignIn from "../Login/SignIn";
import JobList from "../JobList/JobList";
//import Detailspage from "../JobList/Detailspage";
import { ChakraProvider } from '@chakra-ui/react'
import Singlepage from "../JobList/Singlepage"
import ApplicationForm from "../JobList/FormData";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/joblist" element={<JobList />} />
      <Route path="/formdata" element={< ApplicationForm />} />
      {/* <Route path="/joblist/:joblist_id" element={<Detailspage />} /> */}
      <Route path="/joblist/:joblist_id" element={ <ChakraProvider>  <Singlepage /> </ChakraProvider> } />

      

    </Routes>
  );
};

export default Allroutes;
