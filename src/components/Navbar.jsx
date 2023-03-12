import "../stylesheets/Navbar.css";
import React from "react";
import { FaUserCircle } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className="navbar">
            <img className='logo' src="src\assets\record_logo.png"/>
            <div className="button-container">
                <button href=""><HiHome className="icon"/>     home</button>
                <button href=""> <FaUserCircle className="icon"/>     my account</button>
                <button href="">about</button>
                <button href="" className="host-button">► host</button>
            </div>
        </div>
  );
};

export default Navbar;
