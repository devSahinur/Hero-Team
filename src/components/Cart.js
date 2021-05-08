import React from 'react';
import './Cart.css'
import SingleAvatar from './SingleAvatar';
import fakeData from '../fakeData/fakeData.json'

const Cart = ({cartData}) => {
    
    let totalSalary =0;
    for (let i = 0; i < cartData.length; i++) {
        const player = cartData[i];
        totalSalary = totalSalary + player.salary;
        
    }
    return (
        <div className='cart'>
            <h2>Total Users Added: {cartData.length} </h2>
            <h3>Total Salary: ${totalSalary}</h3>
            <div className="avatar-container">
                {
                    cartData.map(player => <SingleAvatar player={player}/>)
                }
            </div>
        </div>
    );
};

export default Cart;