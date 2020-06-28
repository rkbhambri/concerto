import React from "react";
import HomeBanner from '../../../assets/images/home-banner.png';
import './Banner.css';

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner-details">
                <div className="banner-text">
                    <div className="title">Get more from life with agency</div>
                    <div className="description">
                        It is a long established fact that a reader will be distracted by to the readable content of a page when .
                    </div><br />
                    <button className="get-started-button">Get Started</button>
                </div>
                <img src={HomeBanner} alt="Concerto" />
            </div>
        </div>
    );
};

export default Banner;
