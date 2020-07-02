import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product; //distructure from props.product for shortcut use
    return (
        <div className="product">
            <div>
                <img src={img} alt={name} />
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="cart-button">add to cart</button>
            </div>
        </div>
    );
};

export default Product;