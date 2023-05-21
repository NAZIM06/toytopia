import React from 'react';
import Banner from './Banner';
import ToyGallery from './ToyGallery';
import ShopCategory from './ShopCatagory/ShopCatagory';
import DynamicTitle from '../Shared/DynamicTitle';
import WhyUs from './WhyUs';
import Subscribe from './Subscribe';

const Home = () => {
    DynamicTitle("Home");
    return (
        <div>
            <Banner />
            <ToyGallery />
            <ShopCategory/>
            <WhyUs/>
            <Subscribe/>
        </div>
    );
};

export default Home;