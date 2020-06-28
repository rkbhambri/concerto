import React from "react";
import './ServicesProvided.css';

const ServicesProvided = (props) => {
    return (
        <div className="services-provided">
            <div className="services-provided-details">
                <div className="title">Service We Provide</div>
                <div className="description">
                    It is a long established fact that a reader will be distracted by content of a page when.
                </div>
                <button className="get-started-button">Get Started</button>
            </div>
            <div className="services-details">
                {
                    props.services.map((item, index) => {
                        return (
                            <div className="services" key={index}>
                                <div className="logo">
                                    <img src={item.logo_img} alt="Not Found" />
                                </div>
                                <div className="service">{item.service}</div>
                                <div className="description">{item.description}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ServicesProvided;
