import React, { useState, useEffect } from 'react';
import fakeData from '../../data/fakeData'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../data/utilities/databaseManager'
import { Link } from 'react-router-dom';
 
const Shop = () => {    
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(previousCart);
    }, [])
 
    const handleAddProduct = (product)=>{
        // show product on local storage and session storage what you added
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count + 1;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct];
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }


    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(pd=><Product 
                    key = {pd.key} //handle error
                    showButton = {true}
                    handleAddProduct={handleAddProduct} 
                    product={pd}
                />)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/review">
                        <button className="cart-button">Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};
 
export default Shop;