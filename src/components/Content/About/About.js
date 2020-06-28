import React from "react";
import AboutPic from '../../../assets/images/undraw_developer_activity_bv83.png';
import './About.css';

const About = (props) => {
    return (
        <div className="about">
            <div className="about-pic">
                <img src={AboutPic} alt="Cooncerto" />
            </div>
            <div className="about-details">
                <div className="title">Dan Agency give you Best business solution</div>
                <div className="description">
                    It is a long established fact that a reader will be distracted.
                    It is a long established fact that a reader will be distracted.
                    It is a long established fact that a reader will be distracted.
                    It is a long established fact that a reader will be distracted.It is a long established fact that a reader will be distracted.
                    <br /><br />
                    It is a long established fact that a reader will be distracted.
                    It is a long established fact that a reader will be distracted.     It is a long established fact that a reader will be distracted.
                </div>
                <button className="view-more-button">View More</button>
            </div>
        </div>
    );
};

export default About;
