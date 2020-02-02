import React, { Component } from 'react';
import {update ,updateStudent} from "./api"
class EditBus extends Component {
    state = { 
        buses:[]
     }
    componentDidMount(){
        const admin = this.props.admin
        index(admin)
        .then((response) => {
        const buses = response.data.buses
        this.setState({
            buses:buses
        })
        }).catch(error => console.log(error))
    }

    render() { 
        return ( 
            <div>
    {this.state.buses.map((bus,index) => (
        <div key={index}>
        <h5>Bus Number : {bus.bus_no}</h5>
        <h5>Driver : {bus.driver}</h5>
    <button >View</button>
    <button onClick={() => this.delete(bus._id)}>Delete</button>
    </div>
    ))}
    
        </div>
         );
    }
}
 
export default EditBus;