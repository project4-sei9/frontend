import React, { Component } from 'react';
import {create} from "./api"



class StudentAdd extends Component {
    state = { 
       
        buses: this.props.buses,
        student:{
         name:'',
         owner: this.props.user.id,
         busNo: ''
        }
     }
 componentDidMount(){
       
    }
 
    handleChange = event => {
       
       const name = event.target.name
       const value = event.target.value
       const newForm = Object.assign(this.state.student)
       newForm[name] = value;
        this.setState ({
           student:newForm})
    }

   Addstudent =  event => {
    event.preventDefault()
    create(this.props.user,this.state.student)
    .then(
        res=> console.log(res.data)
    )
    .catch(
        err=> console.log(err)
    )

}
    render() { 
        return ( 
            <form className='student-form' onSubmit={this.Addstudent}>
            <h3>Add student</h3>
            <label >name</label>
            <input
              required
              name="name"
              value={this.state.student.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
             {/* <div >
                 {this.state.buses.map((buses,index) => (
                     <div key={index}>
                    <select name="bus_no" onChange={this.handleChange} >
                    <option value={buses.bus_no}>{buses.bus_no}</option>
                    </select>
          </div>
    ))} 
                                    </div> */}
           
            <button type="submit">Add</button>
          </form>
         );
    }
}
 
export default StudentAdd;