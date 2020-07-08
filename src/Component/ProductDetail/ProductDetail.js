import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../data/fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const pd = fakeData.find(product => product.key === productKey);
    console.log(pd)
    return (
        <div>
            <h2>Your product details:</h2>
            <Product showButton={false} product={pd} />
        </div>
    );
};

export default ProductDetail;