import React from 'react';
import HeroSection from '../Commnet/HeroSection';
import BESTCARE from '../Commnet/BESTCARE';
import ProductSlider from '../Commnet/Carousel';
import Modal from '../Commnet/Modal';
import Product from '../Commnet/Product';
import FAQItem from '../Commnet/FAQItem';

const Home = () => {
    return (
        <div>
    <HeroSection></HeroSection>
    <BESTCARE></BESTCARE>
    <ProductSlider></ProductSlider>
    <Modal></Modal>
            <Product></Product>
            <FAQItem></FAQItem>
        </div>
    );
};

export default Home;