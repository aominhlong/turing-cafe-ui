import React, { Component } from 'react';
import ReservationContainer from './ReservationContainer';
import Form from './Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state={
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({ reservations: data}))
  }

  addReservation = (res) => {
    this.setState({ reservations: [...this.state.reservations, res] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Form bookRes={ this.addReservation }/>
          <ReservationContainer allReservations={ this.state.reservations }/>
        </div>
      </div>
    )
  }
}

export default App;
