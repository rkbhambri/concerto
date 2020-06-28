import React from 'react';
import Logo from '../../assets/images/DAN_AGENCY.png';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="miscelleanous-details">
                <img src={Logo} alt="Concerto" />
                <div className="details">
                    Hill top due to this. Hill top due to this.  Hill top due to thiskg dsad bas bas d. Hill top due to this
                </div>
            </div>
            <div className="need-help">
                <div className="title">NEED HELP</div>
                <div className="need-help-links">
                    <div className="link">* Shipping & Return policy</div>
                    <div className="link">* Installation & Assembly</div>
                    <div className="link">* Our Brochure</div>
                    <div className="link">* Help</div>
                </div>
            </div>
            <div className="useful-links-details">
                <div className="title">USEFUL LINKS</div>
                <div className="useful-links">
                    <div className="link">* Create Account</div>
                    <div className="link">* Shopping Cart</div>
                    <div className="link">* Privacy Policy</div>
                    <div className="link">* Press Releases</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
