import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import foodData from '../../foodData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        processOrder()
    }
    const removeProduct = (itemKey) => {
        const index = cart.filter(items => items.id !== itemKey);
        cart.splice(index, 1)
        setCart([...cart]);
        removeFromDatabaseCart(...cart);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        let newCart = [];
        savedCart.forEach(item => {
            newCart.push({ ...foodData.find(pd => pd.key === item.key), quantity: item.count })
        })
        setCart(newCart)

    }, [])

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