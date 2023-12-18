import React from 'react';
import './DashboardPage.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header header="NirLir Dashboard" />
            <div className="dashboardRedirection">
                <div className="dashboardRedirectionBox"><p onClick={() =>navigate('/dashboard/customers')}>Browse Customers</p></div>
                <div className="dashboardRedirectionBox"><p onClick={() =>navigate('/dashboard/orders')}>Browse Orders</p></div>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;
