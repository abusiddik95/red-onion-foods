import React from 'react';
import './Header.css'
import Logo from '../../Images/logo2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import bg from '../../Images/bannerbackground.png'
import { useState } from 'react';
import { useEffect } from 'react';
import foodData from '../../foodData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Header = () => {
    const[cart, setCart] = useState([]);

    useEffect (() => {
        const savedCart = getDatabaseCart();
        const itemKeys = Object.keys(savedCart);
    
        const previousCart = itemKeys.map(existingKey => {
        const item = foodData.find(pd => pd.key === existingKey);
        return item;
        });
        setCart(previousCart);
    },[] )

    return (
        <div>
        <div className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col md-6">
                        <div className="logo">
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                    <div className="col md-6">
                        <div className="login-area">
                        <Link to="/review">
                        <span><FontAwesomeIcon icon={faShoppingCart}/> <small>{cart.length}</small></span>
                        </Link>
                        <button type="button" className="btn btn-light">Log In</button>
                        <button type="button" className="btn btn-danger">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="search-area" style={{backgroundImage:`url(${bg})`}}>
             <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 d-flex justify-content-center align-middle">
                        <form action="/">
                            <h1>Best food waiting for your belly.</h1>
                            <input type="text" placeholder="Search Food Item" />
                            <button type="button" className="btn btn-danger">Search</button>
                        </form>
                    </div>
                </div>
         </div>
     </div>
     </div>
    );
};

export default Header;