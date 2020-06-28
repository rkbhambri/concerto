import React from "react";
import HikingPic from '../../../assets/images/undraw_hiking_d24r.png';
import FitnessTrackerPic from '../../../assets/images/undraw_fitness_tracker_3033.png';
import CareerProgressPic from '../../../assets/images/undraw_career_progress_ivdb.png';
import ChristmasPic from '../../../assets/images/undraw_christmas_tree_56sw.png';

import './WorkDone.css';

const WorkDone = (props) => {
    return (
        <div className="work-done">
            <div className="work-done-details">
                <div className="title">Work we have done</div>
                <div className="description">
                    It is a long established fact that a reader will be distracted by contet of a page when readable to readable.
                </div>
            </div>
            <div className="work-done-pics">
                <div className="hiking">
                    <img src={HikingPic} alt="Concerto" />

                </div>
                <div className="fitness">
                    <img src={FitnessTrackerPic} alt="Concerto" />

                </div>
                <div className="career">
                    <img src={CareerProgressPic} alt="Concerto" />
                </div>
                <div className="christmas">
                    <img src={ChristmasPic} alt="Concerto" />
                </div>
            </div>
            <button className="see-all-button">See all</button>
        </div>
    );
};

export default WorkDone;
