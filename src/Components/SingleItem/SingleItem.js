import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css'
import foodData from '../../foodData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {addToDatabaseCart} from '../../utilities/databaseManager'
import Cart from '../Cart/Cart';


const SingleItem = () => {
    const {itemKey} = useParams();
    const items = foodData;
  
    const [count,setCount] = useState(0);
    const item = items.find(pd=> pd.key === itemKey);
    const [cart, setCart] = useState([]);

    const { name, detailsDescription, img, price } = item;

   const handleAddProduct= (item)=>{
        const toBeAddedKey = item.key;
        const sameItem = cart.find(pd=> pd.key === toBeAddedKey);
        let count = 1; 
        let newCart;
        if(sameItem){
            const count = sameItem.quantity + 1;
            sameItem.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart= [...others, sameItem];
          
        }else{
            item.quantity = 1;
            newCart= [...cart, item]
        }
        setCart(newCart);
        addToDatabaseCart(item.key, count)
        console.log(item.key, count)
     }

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6 text-left">
            <div className="single">
            <h1 className="item-name">{name}</h1>
                <p>{detailsDescription}</p>
                    <h3>${price}</h3>
                    <div className="item-count">
                        {count > 0 ? <button className="minusButton" onClick={() => setCount(count - 1)}> - </button> :
                            <button className="minusButton" disabled> - </button>
                        }
                        {count}
                        <button className="plusButton" onClick={() => setCount(count + 1)}> + </button>
                    </div>
                <button className="addButton" onClick={() => handleAddProduct(item)}><FontAwesomeIcon icon={faShoppingCart} />add</button>
                </div>
                </div>
                <div className="col-md-6">
                    <img src={img} alt={name} width="75%" />
                </div>  

                
            </div>
            </div>
    );
};

export default SingleItem;