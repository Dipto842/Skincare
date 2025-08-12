import React from 'react';
import HeroSection from '../Commnet/HeroSection';
import BESTCARE from '../Commnet/BESTCARE';
import ProductSlider from '../Commnet/Carousel';
import Modal from '../Commnet/Modal';
import Product from '../Commnet/Product';

const Home = () => {
    return (
        <div>
    <HeroSection></HeroSection>
    <BESTCARE></BESTCARE>
    <ProductSlider></ProductSlider>
    <Modal></Modal>
            <Product></Product>
        </div>
    );
};

export default Home;