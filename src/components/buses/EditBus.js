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
        const user = this.props.admin
        const busId = this.props.match.params.id 
        show(user,busId)
        .then((res)=>{
            const bus = res.data.bus
            this.setState({ bus:bus })
            console.log(this.state.bus)
        })
        .catch((err)=>console.log(err))
  
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
        console.log(this.state.bus)
    }

    // getGeolocation() {
    //     console.log('loc')
    //      console.log(this.props)
      
    //     location((err, loc) => {
    //         if (err) console.error(err)
    //         else console.log(loc.latitude)
    //     })

    // }

    handleSubmit = (event) => {
        event.preventDefault();
       
        const user = this.props.admin
        const busId = this.props.match.params.id;
       // getGeolocation()
         const updateBus = this.state.bus;
         
         
          update(user,updateBus,busId)
         .then(() => alert('updated'))
         .then(() => this.props.history.push(`/buses/${busId}`)) // redirect bus Id pade
         .catch((error) => console.log(error))

    }
    
    render() { 
        console.log(this.state.bus.bus_no)
        return ( 
            <div className="EditBus">
               <form onSubmit={this.handleSubmit}>
        <label>Bus Number:{this.state.bus.bus_no}</label> 
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