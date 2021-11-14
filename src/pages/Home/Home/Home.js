import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ProductBanner from '../ProductBanner/ProductBanner';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Shop></Shop>
            <ProductBanner></ProductBanner>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;