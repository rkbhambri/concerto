import React from "react";
import './Accomplishments.css';

const Accomplishments = (props) => {
    return (
        <div className="accomplishments">
            <div className="accomplishments-details">
                <div className="clients">
                    <div className="value">100+</div>
                    <div className="title">Clients</div>
                </div>
                <div className="projects-completed">
                    <div className="value">250+</div>
                    <div className="title">Projects Completed</div>
                </div>
                <div className="satisfied-clients">
                    <div className="value">100+</div>
                    <div className="title">Satisfied Clients</div>
                </div>
                <div className="awards">
                    <div className="value">6+</div>
                    <div className="title">Awards</div>
                </div>
            </div>
        </div>
    );
};

export default Accomplishments;
