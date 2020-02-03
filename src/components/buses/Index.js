// import React, { Component } from 'react';
// import {index ,destroy} from "./api"
// class BusIndex extends Component {
//     state = { 
//         buses:[]
//      }
//     componentDidMount(){
//         const admin = this.props.admin
//         index(admin)
//         .then((response) => {
//         const buses = response.data.buses
//         this.setState({
//             buses:buses
//         })
//         }).catch(error => console.log(error))
//     }
//     delete = (id) => {
//         const admin = this.props.admin
//         destroy(admin,id)
//         .then(() => alert("deleted"))
//         .then(() => {
//             const buses = this.state.buses.filter((bus) => bus._id !== id)
//             this.setState ({buses:buses})
//         })
//         .catch((err) => console.log(err))
//     }

//     render() { 
//         return ( 
//             <div>
//     {this.state.buses.map((bus,index) => (
//         <div key={index}>
//         <h5>Bus Number : {bus.bus_no}</h5>
//         <h5>Driver : {bus.driver}</h5>
//     <button >View</button>
//     <button onClick={() => this.delete(bus._id)}>Delete</button>
//     </div>
//     ))}
    
//         </div>
//          );
//     }
// }
 
// export default BusIndex;