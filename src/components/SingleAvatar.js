import React from 'react';

const SingleAvatar = ({player}) => {
    return (
        <div className='avatar'>
            <img src={player.img} alt="" />
            <h5>{player.name}</h5>
        </div>
    );
};

export default SingleAvatar;