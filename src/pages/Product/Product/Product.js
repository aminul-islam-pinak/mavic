import React from 'react';
import Navigation from '../../../shared/Navigation/Navigation';
import ProductHeader from '../ProductHeader/ProductHeader';
import AvailableProducts from './AvailableProducts/AvailableProducts';

const Product = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <ProductHeader date={date} setDate={setDate}></ProductHeader>
            <AvailableProducts date={date}></AvailableProducts>
            
        </div>
    );
};

export default Product;