import React from 'react'
import HeadingText from '../components/HeadingText';
import EmailMe from '../components/EmailMe';
import Contact from '../components/Contact';
import Navbar2 from "../components/NavbarToHome";
import AllShows from '../components/AllShows';


export default function Shows() {
  return (
    <div>
        <HeadingText />
        <Navbar2 />
        <AllShows />
        <br /><br /><br />
        <EmailMe />
        <Contact />
    </div>
  )
}
