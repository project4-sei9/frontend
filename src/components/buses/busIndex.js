import React, {Component} from 'react';
import {index,destroy,update} from './api'
import {Link} from 'react-router-dom';

class busIndex extends Component {
    state = { 
        buses: [] //[{},{}]
     }
   componentDidMount(){
        const user = this.props.admin 
        index(user)
        .then(response => {
            const buses = response.data.buses
            this.setState({
                buses:buses
                 
            })
            console.log(this.state.buses)
        })
       

        .catch(()=> console.error)
  

    }

    delete = (id) => {
                const admin = this.props.admin
                destroy(admin,id)
                .then(() => alert("deleted"))
                .then(() => {
                    const buses = this.state.buses.filter((bus) => bus._id !== id)
                    this.setState ({buses:buses})
                })
                .catch((err) => console.log(err))
            }

    render() { 
        console.log(this.props.user)
        return ( 
            <div className="busIndex">
          
     {this.state.buses.map((bus,index) => (
        <div key={index}>
            {console.log(bus)}
        <h5>Bus Number : {bus.bus_no}</h5>
        <h5>status : {bus.status}</h5>
    <button >View</button>
    <Link to={`/buses/${bus._id}/edit`}>update</Link> || 
    <Link to={`/buses/${bus._id}/show`}>show</Link>
    <button onClick={() => this.delete(bus._id)}>Delete</button>
    </div>
    ))}
    
        </div>
              
         )  
        }
}
 
export default busIndex;