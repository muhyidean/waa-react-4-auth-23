import React, { Fragment } from 'react'
import PageRoutes from '../../routes/PageRoutes';
import Header from '../Header/Header';


const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <PageRoutes/>
        </Fragment>
    );
}

export default Dashboard;