import React from 'react';
import { Link } from 'react-router-dom';

 const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for(let i =0; i< cart.length; i++){
        const item = cart[i];
        total = total + item.price * item.quantity;

    }
    let shipping = 0;
    if(total > 15.99){
        shipping = 2.99
    }else if( total > 35){
        shipping = 0;
    }else if( total > 0){
        shipping = 4.99
    }
    const tax = (total / 10).toFixed(2)
    console.log(tax)
    const GrandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    
    return (
        <div>
            <h1>this is cart page</h1>
            <h3>Order Summery</h3>
            <p>Items Ordered: {cart.length} </p>
            <p>Item Price: {formatNumber(total)} </p>
            <p>Shipping {shipping}</p>
            <p>TAX: {tax}</p>
            <p>Total Price:{GrandTotal} </p>
            <br/>
            {/* <Link to="/review">
            <button>review order</button>
            </Link> */}

            {
                props.children
            }
            
        </div>
    );
};

export default Cart;