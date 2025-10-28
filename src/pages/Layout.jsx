import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';

import '../css/Contact.css';
import { SocialIcon } from 'react-social-icons';

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