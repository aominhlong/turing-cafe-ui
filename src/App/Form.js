import React, { Component } from 'react';

class Form extends Component{
    constructor() {
        super()
        this.state={
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    clearSubmission = () => {
        this.setState({ name: '', date: '', time: '', number: '' })
    }

    postIt = (test) => {
        const post = {
            name: this.state.name,
            date: this.state.date,
            time: this.state.time,
            number: Number(this.state.number)
        }

        fetch('http://localhost:3001/api/v1/reservations', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type':'application/json'
            }
        })
    }

    makeReservation = () => {
        this.clearSubmission()
        const reservation={
            id: Date.now(),
            name: `${this.state.name}`,
            date: `${this.state.date}`,
            time: `${this.state.time}`,
            number: `${this.state.number}`
        }
        this.postIt()
        this.props.bookRes(reservation)
    }

    render() {
        return(
            <div>
                <input placeholder='Name' onChange={event => this.setState({ name: String(event.target.value) })}>
                </input>
                <input placeholder='Date(mm/dd)' onChange={event => this.setState({ date: String(event.target.value) })}>
                </input>
                <input placeholder='Time' onChange={event => this.setState({ time: String(event.target.value) })}>
                </input>
                <input placeholder='Number of guests' onChange={event => this.setState({ number: String(event.target.value) })}>
                </input>
                <button onClick={() => { this.makeReservation() }}>Make Reservation</button>
            </div>
        )
    }
}

export default Form;