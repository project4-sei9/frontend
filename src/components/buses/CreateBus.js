import React, { Component } from 'react';
import {create, getDrivers} from "./api"

class CreateBus extends Component {
    state = {
        bus_no:'',
        drivers: [],
        driver:'',
        students:[{
            name:'',
            address:{
                latitude:'',
                longitude:''
            }
        }]
      }
      componentDidMount(){
        const admin = this.props.admin
        getDrivers(admin)
        .then((response) => {
        const drivers = response.data.users
        this.setState({
            drivers:drivers
        })
        }).catch(error => console.log(error))
    }
    HandleSubmit = event => {
      event.preventDefault()
      create(this.state)
      .then(() => alert("Added a Bus"))
      .then(() => this.setState({bus_no:'',driver: '', students:[]}))
        .catch(error => {
          console.error(error)
          this.setState({bus_no:'',driver: '',students:[]})
        })
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
      })
  
    render () {
    const {bus_no,driver,name,latitude,longitude} = this.state
  
      return (
          <div>lala
        <form className='' onSubmit={this.HandleSubmit}>
          <h3>Add a Bus</h3>
          
          <label htmlFor="bus_no">Bus Number</label>
          <input
            required
            name="bus_no"
            value={bus_no}
            type="number"
            placeholder="Bus Number"
            onChange={this.handleChange}
          />
          <label htmlFor="drivers">driver</label>
          {this.state.drivers.map((driver,index) => (
        <div key={index}>
          <select name="driver" onChange={this.handleChange} >
          <option value={driver}>{driver}</option>
          </select>
          </div>
    ))}
          <label htmlFor="students">Students</label>
          <br/>
          <label>Name:</label>
          <input
            name="student"
            value={name}
            type="text"
            placeholder="Students"
            onChange={this.handleChange}
          />
          <label>Address</label>
          <br/>
          <label>latitude</label>
          
          <label>longitude</label>
          
          <button type="submit">Submit</button>
        </form>
        </div>
         );
    }
}
 
export default CreateBus;