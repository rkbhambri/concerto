import React from 'react';
import Logo from '../../assets/images/DAN_AGENCY.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <img src={Logo} alt="Concerto" />
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#about">About Us</a>
                <a href="#service">Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
};

export default Header;
