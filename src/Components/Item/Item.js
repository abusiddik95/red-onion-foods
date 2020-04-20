import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    console.log(props);
    const { name, img, description, price, key } = props.item;

    return (
        <div className="single-item">
            <img src={img} alt="name" />
            <Link to={"/item/" + key}>
            <h5 className="item-name">{name}</h5>
            </Link>
            <p className="desc">{description}</p>
            <h4 className="price">${price}</h4>
    
        </div>
    );
};

export default Item;