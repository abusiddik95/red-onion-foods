import React, { useEffect, useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';
import foodData from '../../foodData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const[cart, setCart] = useState([]);

    const removeProduct = (itemKey)=>{
        const newCart = cart.filter(items=> items.id !== itemKey);
        setCart(newCart);
        removeFromDatabaseCart(itemKey);
    }

    useEffect(()=>{
       const savedCart = getDatabaseCart();
       const itemKeys = Object.keys(savedCart);

       const cartItems = itemKeys.map(existingKey => {
           const item = foodData.find(pd => pd.key === existingKey);
           item.quantity = savedCart[existingKey];
            return item;
        });
        setCart(cartItems);
       console.log(cartItems);
        
    },[])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
            <h2>this is review page</h2>
            <h2>Cart Items: {cart.length} </h2>
            {
                cart.map(item => <ReviewItem 
                    key={item.key}
                    removeProduct={removeProduct}
                    product={item}></ReviewItem>)
            }
            </div>
            <div className="col-md-5">
               <Cart cart={cart}></Cart>
           </div>
            </div>
            
        </div>
    );
};

export default Review;