import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faFlag, faMapMarker, faHandHoldingUsd, faUserPlus} from '@fortawesome/free-solid-svg-icons'

const User = ({data, handlePlayerData}) => {
    return (
        <div className='user'>
            <img src={data.img} alt="" />
            <div>
                <p><FontAwesomeIcon icon={faAddressCard} /> Name: {data.name}</p>
                <p><FontAwesomeIcon icon={faMapMarker} /> Address: {data.location}</p>
                <p><FontAwesomeIcon icon={faFlag} /> Country: {data.country}</p>
                <p><FontAwesomeIcon icon={faHandHoldingUsd} /> Salary: ${data.salary}</p>
            </div>
            <button onClick={() =>handlePlayerData(data)} className="add-btn disabled"><FontAwesomeIcon icon={faUserPlus} /> Added</button>
        </div>
    );
};

export default User;