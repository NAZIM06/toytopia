import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header';
import Footer from '../../Shared/Footer';


const Main = () => {
    return (
        <>
            <Header/>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer/>
            

        </>
    );
};

export default Main;