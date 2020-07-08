import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../data/utilities/databaseManager';
import fakeData from '../../data/fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import completeOrder from '../../data/images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false); // false means by defaul order not placed

    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const handleRempveProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey) // remove product by key
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect( () => {
        const savedCart = getDatabaseCart(); // this function works : collect data id from saved data & amount from local storage
        const productKeys = Object.keys(savedCart); // only get key from the list of saved data in local storage
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find( pd => pd.key === key) // get product from fakeData by saved product key at local storage
            product.quantity = savedCart[key]; // show orderd product quantity
            return product
        })
        setCart(cartProducts);
    }, [])
    let thankYou;
    if(orderPlaced){ thankYou = <img src={completeOrder} alt=""/>}
    return (
        <div style={{display : 'flex'}}>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key = {pd.key}
                        product={pd}
                        removeProductButton={handleRempveProduct} 
                    />)
                }
                { thankYou }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className="cart-button" onClick={handlePlaceOrder}>Place Order</button>
               </Cart>
            </div>            
        </div>
    );
};

export default Review;