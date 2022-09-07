import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/Navbar.css';

function Navbar() {

  return (
    <nav>
        <ul className="layoutHomePage_ul">
            <li className="layoutHomePage_li">
                <Link to="/"><b>HOME</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/about"><b>ABOUT</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/shows"><b>SHOWS</b></Link>
            </li>
            <li className="layoutHomePage_li">
                <Link to="/music"><b>MUSIC</b></Link>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
