import React from 'react';
import foodData from './foodData';

const Inventory = () => {

    const handleAddInventory = ()=>{
        console.log(foodData[0])
    }
    return (
        <div>
            <h1>Add Inventory to sell more....</h1>
            <button onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;