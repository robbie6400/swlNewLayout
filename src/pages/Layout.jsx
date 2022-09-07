import React from "react";
import {Outlet} from "react-router-dom";
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';

const Layout = () => {
  return (
    <>    
      {/* <HeadingText /> */}
      <Outlet />
      <EmailMe />
      <Contact />
    </>
  );
};

export default Layout;