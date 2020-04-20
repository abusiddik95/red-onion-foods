import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import './SingleItem.css'
import foodData from '../../foodData';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {addToDatabaseCart} from '../../utilities/databaseManager'

const SingleItem = () => {
    const {key} = useParams();
    const items = foodData;
    const [category,setCategory]= useState([]);
    const [count,setCount] = useState(0);
    const item = items.find(pd=> key === Product.key);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const itemCategory = item.category;
        const currentItems = items.filter(item=> itemCategory === item.category);
        setCategory(currentItems);
        console.log(currentItems);
    },[item.category, items])
    const { name, detailsDescription, img, price } = item;
    
    const handleAddProduct= (item)=>{
        const toAddedKey = item.key;
        const sameItem = cart.find(pd => pd.key === toAddedKey);
        let count = 1;
        let newCart;
        if(sameItem){
            count = sameItem.quantity + 1;
            sameItem.quantity = count;
            const others = cart.filter(pd => pd.key !== toAddedKey);
            newCart = [...others, sameItem];
        }else{
            item.quantity = 1;
            newCart = [...cart, item]
        }
        setCart(newCart)        
        addToDatabaseCart(item.key, count)
        console.log(newCart);
    }

    return (
        <div className="container">
            <Cart cart={cart}></Cart>
            <div className="row">
            <div className="col-md-6 text-left">
            <div className="single">
            <h1>{name}</h1>
                <p>{detailsDescription}</p>
                    <h3>${price}</h3>
                    <div className="item-count">
                        {count > 0 ? <button className="minusButton" onClick={() => setCount(count - 1)}> - </button> :
                            <button className="minusButton" disabled> - </button>
                        }
                        {count}
                        <button className="plusButton" onClick={() => setCount(count + 1)}> + </button>
                    </div>
                <button className="addButton" onClick={handleAddProduct}><FontAwesomeIcon icon={faShoppingCart} />add</button>
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