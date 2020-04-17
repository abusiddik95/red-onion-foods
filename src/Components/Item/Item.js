import React from 'react';
import './Item.css'

const Item = (props) => {
    console.log(props.item.name);
    const {img, name, price} = props.item;
    const title = props.item.name.slice(0, 10)
    return (
        <div onClick={()=> props.handleAddProduct(props.item)} className="single-item col-md-4 text-center">
            <img src={img} alt=""/>
            <h3> {title} </h3>
            <p> Exercitation minim ad amet dolor commodo voluptate eu fugiat occaecat excepteur</p>
            <p><small>${price}</small></p>
        </div>
    );
};

export default Item;