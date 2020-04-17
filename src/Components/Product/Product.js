import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Item from '../Item/Item';
import Cart from '../Cart/Cart';

const Product = () => {

    const first6= fakeData.slice(0, 6);
    const[products, setProducts]= useState(first6);
    console.log(first6);
    const [cart, setCart] = useState([])

    const handleAddProduct = (item) =>{
        console.log('product added', item);
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
    <div className="container item-area">
         <h2>{cart.length}</h2>
                        <div className="row">
                        {
                        products.map(item=> 
                        <Item 
                        handleAddProduct = {handleAddProduct}
                        item={item}></Item>
                          )
                        }
                        </div>
                        <Cart cart={cart}></Cart>
                    </div>
                    

    );
}

export default Product;

// http://www.json-generator.com/api/json/get/ceeRGboPvS?indent=2
//http://www.json-generator.com/api/json/get/cfqJcmCmYy?indent=2