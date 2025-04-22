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
      <br />
        <div>
              <ul className="iconList_ul">
                <li className="iconList_li"><SocialIcon url="https://www.facebook.com/SkylerWhitfieldLive/" network="facebook" bgColor="blue" /></li>
                <li className="iconList_li"><SocialIcon url="https://www.youtube.com/channel/UC2PDKc7mezW8bSkvv0NiyKQ/" network="youtube" bgColor="blue" /></li>
                <li className="iconList_li"><SocialIcon url="https://www.soundcloud.com/user-238870048/" network="soundcloud" bgColor="blue" /></li>
              </ul>
            </div>
      <br />     
      <Navbar />
      <Outlet />
      <EmailMe />
      <Contact /> 
    </>
  );
};

export default Layout;