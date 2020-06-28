import React from 'react';
import Logo from '../../assets/images/DAN_AGENCY.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <img src={Logo} alt="Concerto" />
            <div className="topnav" id="myTopnav">
                <a href="#home" className="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                {/* <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a> */}
            </div>
        </div>
    );
};

export default Header;
