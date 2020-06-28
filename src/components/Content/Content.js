import React, { useState, useEffect } from 'react';
import './Content.css';
// import { isEmpty, isArrayNotEmpty } from '../../helpers/miscellenous';
import { getServices } from '../../services/services';
import Banner from './Banner/Banner';
import ServicesProvided from './ServicesProvided/ServicesProvided';
import About from './About/About';
import Accomplishments from './Accomplishments/Accomplishments';
import WorkDone from './WorkDone/WorkDone';

const Content = (props) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        getServices().then(data => {
            setServices(data)
        });
    }, []);

    return (
        <div className="content">
            <Banner />
            <ServicesProvided services={services} />
            <About />
            <Accomplishments />
            <WorkDone />
        </div>
    );
};

export default Content;
