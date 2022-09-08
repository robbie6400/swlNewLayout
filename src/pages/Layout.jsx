import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';

const Layout = () => {
  return (
    <>    
      <Navbar />
      <Outlet />
      <EmailMe />
      <Contact /> 
    </>
  );
};

export default Layout;