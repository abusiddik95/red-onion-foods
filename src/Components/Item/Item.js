import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Item = (props) => {
    console.log(props);
    const { name, img, description, price, key } = props.item;

    return (
        <div className="single-item">
            
            <Link to={"/item/" + key}>
                <img src={img} alt="name" />
                <h5 className="item-name">{name}</h5>
                <p className="desc">{description}</p>
                <h4 className="price">${price}</h4>
            </Link>
        </div>
    );
};

export default Item;