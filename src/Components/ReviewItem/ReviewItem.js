import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, price, key} = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <h4>Quantity  {quantity}</h4>
            <p> {price} </p>
            <button onClick={() => props.removeProduct(key)}>Remove Item</button>
        </div>
    );
};

export default ReviewItem;