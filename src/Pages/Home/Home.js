import React from 'react';
import Info from '../../Info/Info';
import Product from '../../Product/Product';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Product></Product>
        </div>
    );
};

export default Home;