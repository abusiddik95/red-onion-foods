import React from 'react';
import './Blog.css'
import blogImg1 from '../../Images/Image/chef-cook-food-33614.png'
import blogImg2 from '../../Images/Image/adult-blur-blurred-background-687824.png'
import blogImg3 from '../../Images/Image/architecture-building-city-2047397.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    return (
        <div className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h2>Why You Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                        <img src={blogImg1} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">A good responder</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="">see more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src={blogImg2} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">fast delivery</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="">see more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className="card">
                        <img src={blogImg3} alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">home delivery</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="">see more <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;