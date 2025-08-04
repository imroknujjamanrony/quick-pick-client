import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar> 
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;