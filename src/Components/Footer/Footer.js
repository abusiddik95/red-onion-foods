import React from 'react';
import footerLogo from '../../Images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={footerLogo} alt=""/>
                    </div>
                    <div className="col-md-6"><p><small> 2020 &copy; All rights Reserved</small></p></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;