import "../stylesheets/Navbar.css";
import React from "react";
import { FaUserCircle } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className="navbar">
            <a href="/"><img className='logo' src="src\assets\record_logo.png"/></a>
            <div className="button-container">
              <a href="/home"><button href="/home"><HiHome className="icon"/>     home</button></a>
              <a href="/account"><button > <FaUserCircle className="icon"/>     my account</button></a>
              <a href="/help"><button >about</button></a>
              <a href="/hosting"><button className="host-button">► host</button></a>
            </div>
        </div>
  );
};

export default Navbar;
