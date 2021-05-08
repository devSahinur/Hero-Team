import React, { useState } from 'react';
import User from './User';
import fakeData from '../fakeData/fakeData.json'
import './Users.css'
import Cart from './Cart';

const Users = () => {
    const [cartData, setCartData] = useState([]);

    const handlePlayerData = e =>{
        const newData = [...cartData, e]
        setCartData(newData)
    };

    return (
        <div className='users-container'>
            <div className="users">
                {
                    fakeData.map(data => <User key={data.id} handlePlayerData={handlePlayerData} data={data}/>)
                }
            </div>
            <div className="cart-details">
                <Cart cartData={cartData}/>
            </div>
        </div>
    );
};

export default Users;