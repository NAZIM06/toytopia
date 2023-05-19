import React from 'react';
import Banner from './Banner';
import ToyGallery from './ToyGallery';
import ShopCategory from './ShopCatagory/ShopCatagory';
import DynamicTitle from '../Shared/DynamicTitle';

const Home = () => {
    DynamicTitle("Home");
    return (
        <div>
            <Banner />
            <ToyGallery />
            <ShopCategory/>
        </div>
    );
};

export default Home;