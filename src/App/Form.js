import React, { Component } from 'react';

class Form extends Component{
    constructor() {
        super()
        this.state={
            name: '',
            date: '',
            time: '',
            guests: ''
        }
    }

    clearSubmission = () => {
        this.setState({ name: '', date: '', time: '', guests: ''})
    }

    // postIt() {
    //     fetch('http://localhost:3001/api/v1/reservations', {
    //         method: 'POST',
    //         body: JSON.stringify(this.state),
    //         header: {
    //             'Content-Type':'application/json'
    //         }
    //     })
    // }

    makeReservation = () => {
        this.clearSubmission()
        const reservation={
            id: this.state.length+1,
            name: `${this.state.name}`,
            date: `${this.state.date}`,
            time: `${this.state.time}`,
            guests: `${this.state.guests}`
        }
        this.props.bookRes(reservation)
    }

    render() {
        return(
            <div>
                <input placeholder='Name' onChange={event => this.setState({ name: event.target.value})}>
                </input>
                <input placeholder='Date(mm/dd)' onChange={event => this.setState({ date: event.target.value})}>
                </input>
                <input placeholder='Time' onChange={event => this.setState({ time: event.target.value})}>
                </input>
                <input placeholder='Number of guests' onChange={event => this.setState({ guests: event.target.value})}>
                </input>
                <button onClick={() => { this.makeReservation() }}>Make Reservation</button>
            </div>
        )
    }
}

export default Form;