import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgrey',
        margin: '0px 0px 5px 200px',
        paddingBottom: '5px'
    }
    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button className='cart-button' onClick={() => props.removeProductButton(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;