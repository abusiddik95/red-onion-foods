import React, { useEffect, useState } from 'react';
import { getDatabaseCart,removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import foodData from '../../foodData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Review = () => {
    const[cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = ()=>{
        setCart([]);
        setOrderPlaced(true);
        processOrder()
    }
    const removeProduct = (itemKey)=>{
        const newCart = cart.filter(items => items.id !== itemKey);
        setCart(newCart);
        removeFromDatabaseCart(itemKey);
    }

    useEffect(()=>{
       const savedCart = getDatabaseCart();
       const itemKeys = Object.keys(savedCart);

            const previousCart = itemKeys.map(existingKey => {
            const item = foodData.find(pd => pd.key === existingKey);
            item.quantity = savedCart[existingKey];
             return item;
         });
         setCart(previousCart);
        
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
               <Cart cart={cart}>
                   <Link>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                   </Link>
               </Cart>
           </div>
            </div>
            
        </div>
    );
};

export default Review;