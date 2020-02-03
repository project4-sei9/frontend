import React, { Component } from 'react';
import {create } from "./api"
import {withRouter} from "react-router-dom"


class CreateBus extends Component {
    state = {
      bus:{
        bus_no: 0,
      // "status": "" ,//pickup = false , dropOff = true 
      // "location":  { "latitude":"",
      //               "longitude": ""
            // }
          }
        }
    
    
    handleChange = (event) => {
      // //get the name of input
      const name = event.target.name;
      // // get the value of input
      const value = event.target.value;
       const newForm = {...this.state.bus}
       newForm[name] = value;
      this.setState({
          bus:newForm
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      const newBus = this.state.bus
      const user = this.props.admin
      create(user,newBus)
      .then((res) => console.log(res))
      .then(() => this.props.history.push('/buses'))
      .catch((error) => console.log(error))
  }

    
    
    render () {
      return(
        <div className="CreateBus">
          <h3>Add a Bus</h3><br/>
          <form onSubmit={this.handleSubmit}>
              <label>Bus Number:</label> 
              <input onChange={this.handleChange} type="number" name="bus_no" value={this.state.bus.bus_no}/> <br/>
              <button type="submit">Add Bus </button>
          </form>
          </div>
      )
  }


}
export default withRouter(CreateBus);