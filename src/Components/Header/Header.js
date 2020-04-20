import React, { useState } from 'react';
import './Header.css'
import Logo from '../../Images/logo2.png';
import { Link, Router } from 'react-router-dom';
import foodData from '../../foodData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';


const Header = (props) => {
    const[cart, setCart] = useState([]);
    
    return (
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
                        <span><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} </span>
                        </Link>
                        <button type="button" className="btn btn-light">Log In</button>
                        <button type="button" className="btn btn-danger">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container search-area">
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
            <div className="container nav-area">
                <div className="row text-center">
                    <div className="col-md-12">
                        <ul className="nav">
                            <li><a href="/product">All Items</a></li>
                            <li><a href="#">Lunch</a></li>
                            <li><a href="#">Breakfast</a></li>
                            <li><a href="#">Dinner</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;