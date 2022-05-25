import React from 'react';
import Reservation from './Reservation'
import './ReservationContainer.css';

function ReservationContainer( { allReservations }) {
    // console.log('all', allReservations)
    const resList = allReservations.map(res => {
        return <Reservation
            id={res.id}
            key={res.id}
            name={res.name}
            date={res.date}
            time={res.time}
            guests={res.number}
        />
    })
    return(
        <div className='allRes'>
            { resList }
        </div>
    )
}

export default ReservationContainer;