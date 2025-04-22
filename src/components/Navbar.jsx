import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {

  return (
    <nav>
        <ul className="layoutHomePage_ul">
            <li className="layoutHomePage_li">
                <Link to="/"><b>HOME</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/calendar"><b>CALENDAR</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/music"><b>MUSIC</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/merch"><b>MERCH</b></Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
