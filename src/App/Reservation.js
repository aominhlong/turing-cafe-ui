import React from 'react';
import './Reservation.css';

function Reservation({ name, date, time, guests }) {
    return(
        <div className='res'>
            <h3>{ name }</h3>
            <p>{ date }</p>
            <p>{ time }</p>
            <p>{ guests }</p>
            <button>Cancel</button>
        </div>
    )
}

export default Reservation;