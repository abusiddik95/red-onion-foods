import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import foodData from '../../foodData'
import { useState } from 'react';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import './Product.css'
import { Link } from 'react-router-dom';
import { getDatabaseCart,removeFromDatabaseCart } from '../../utilities/databaseManager';


const Product = () => {

    const[cart, setCart] = useState([]);

    const items = foodData;
    const [item,SetItem] = useState([]);
    const [ category, setCategory] = useState('lunch')

    useEffect(()=>{
        SetItem(items);
    },[items]);
    const currentFood = item.filter(item=> item.category === category);

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const itemKeys = Object.keys(savedCart);
        const previousCart = itemKeys.map(key => {
        const item = foodData.find(pd => pd.key === key);
        item.quantity = savedCart[key];
        return item;
        })
        setCart(previousCart);
    })
    
    return (
    <div className="container item-area">
                        <div className="row text-center">
                        <Cart cart={cart}></Cart>
                            <div className="col-md-12">
                            <ul className="nav">
                            <li><a href="/product">All Items</a></li>
                            <li className="nav-item m-2" onClick={() => setCategory("breakfast")}>
                            <span className={category === "breakfast" ? "active h6" : "h6"}>Breakfast</span>
                            </li>
                            <li className="nav-item m-2" onClick={() => setCategory("lunch")}>
                            <span className={category === "lunch" ? "active h6" : "h6"}>Lunch</span>
                            </li>
                            <li className="nav-item m-2" onClick={() => setCategory("dinner")}>
                            <span className={category === "dinner" ? "active h6" : "h6"}>Dinner</span>
                            </li>
                        </ul>
                            </div>
                        </div>
                        <div className="row">
                        {
                        currentFood.map(item=> 
                        <div className="item col-md-4 text-center">
                        <Item 
                        key={item.key}
                        showAddToCart= {true} 
                        item={item}>
                        </Item>
                        </div>
                          )
                        }       
                        </div>
                        <div className="checkout d-flex justify-content-center my-3">
                         <Link to="/review">
                            <button>Checkout Order</button>
                         </Link>
                        </div>
                    </div>                

    );
}

export default Product;
