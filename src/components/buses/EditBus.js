import React, { Component } from 'react';
import {update,show} from "./api"
import {withRouter} from "react-router-dom"



class EditBus extends Component {
    state = { 
        bus:{
            bus_no: 0,
            status: "" ,//pickup = false , dropOff = true 
            location:  { latitude:"",
                          longitude: ""
                         }
                }
              }
     
            
    componentDidMount(){ // show bus info 
        const user = this.props.admin;
       // const busId = this.props.match.params.id;
        show(user)
        .then((response) => {
            const bus = response.data.bus
            this.setState({
                dataForm:bus
            })
        })
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        // //get the name of input
        const name = event.target.name;
        // // get the value of input
        const value = event.target.value;
       
        
         const newForm = Object.assign(this.state.bus)
         newForm[name] = value;
         this.setState({
            bus:newForm
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //console.log(this.props)
        // const location = require('@derhuerst/browser-location')
        // location((err, loc) => {
        //     if (err) console.error(err)
        //     else console.log(loc.latitude)
        // })
        const user = this.props.admin
        const busId = this.props.match.params.id;
        console.log()
         const updateBus = this.state.bus;
         
         
          update(user,updateBus,"5e3704412a594cdb90856d11")
         .then(() => alert('updated'))
         .then(() => this.props.history.push(`/buses/${busId}`)) // redirect bus Id pade
         .catch((error) => console.log(error))

    }
    
    render() { 
        return ( 
            <div className="EditBus">
               <form onSubmit={this.handleSubmit}>
              <label>Bus Number:</label> 
              <input onChange={this.handleChange} type="number" name="bus_no" value={this.state.bus.bus_no}/> <br/>
              <label>status:
              <label>
              <input type="radio" value="DropOff" name= "status"
                      checked={this.state.bus.status === 'DropOff'} 
                      onChange={this.handleChange} />   
                      DropOff</label>
                      <label>
               <input type="radio" value="PickUp" name= "status"
                      checked={this.state.bus.status === 'PickUp'} 
                      onChange={this.handleChange} /> PickUp </label>  
                    </label> <br/> 
                    
              
          <button type="submit">Update </button>
          </form>
    
        </div>
         );
    }
}

 
export default withRouter(EditBus);