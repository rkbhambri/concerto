import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import { getCookie, setCookie } from '../../helpers/miscellenous';
import { guestHitService } from '../../services/services';

const Layout = (props) => {

    useEffect(() => {
        if (!getCookie('userId')) {
            const payload = {
                guest_type: "new",
                guest_id: "11234694754759"
            }
            guestHitService(payload).then(response => {
                console.log('===response===');
                setCookie('userId', response.id);
            });
        } else {
            const payload = {
                guest_type: "existing",
                guest_id: "11234694754759"
            }
            guestHitService(payload).then(response => {
                console.log('===response===', response);
            });
        }
    }, []);

    return (
        <div className="layout">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;
