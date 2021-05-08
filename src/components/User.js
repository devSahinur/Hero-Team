import React from 'react';
import './User.css';

const User = ({data, handlePlayerData}) => {
    return (
        <div className='user'>
            <img src={data.img} alt="" />
            <div>
                <p> Name: {data.name}</p>
                <p> Address: {data.location}</p>
                <p> Country: {data.country}</p>
                <p> Salary: ${data.salary}</p>
            </div>
            <button onClick={() =>handlePlayerData(data)} className="add-btn disabled">Added</button>
        </div>
    );
};

export default User;