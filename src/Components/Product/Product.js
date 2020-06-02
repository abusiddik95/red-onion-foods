import React, { useEffect } from 'react';
import foodData from '../../foodData'
import { useState } from 'react';
import Item from '../Item/Item';
import './Product.css'
import { Link } from 'react-router-dom';



const Product = () => {

    const items = foodData;
    const [item, SetItem] = useState([]);
    const [ category, setCategory] = useState('lunch')

    useEffect(()=>{
        SetItem(items);
    },[items]);
    const currentFood = item.filter(item=> item.category === category);
    
    return (
    <div className="container item-area">
                        <div className="row text-center">
                            <div className="col-md-12">
                            <ul className="nav">
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
                        item={item}>
                        </Item>
                        </div>
                          )
                        }       
                        </div>
                        <div style={{paddingTop:'50px'}} className="checkout d-flex justify-content-center my-3">
                         <Link to="/review">
                            <button>Checkout Order</button>
                         </Link>
                        </div>
                    </div>                

    );
}

export default Product;
