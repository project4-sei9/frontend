import React, { Component } from 'react';
import {index ,destroy ,show} from "./api"
import { Link } from 'react-router-dom'
class Student extends Component {
    state = { 
        user :this.props.user,
        students:[]
     }
 componentDidMount(){
        const userid = this.props.user
        index(userid)
        .then((response) => {
        const students = response.data.students
        this.setState({...this.state,
            students:students
        })
        }).catch(error => console.log(error))
    }
 
    delete = (id) => {
        const user = this.props.user
        destroy(user,id)
        .then(() => alert("deleted"))
        .then(() => {
            const students = this.state.students.filter((student) => student._id !== id)
            this.setState ({...this.state.user,students:students})
        })
        .catch((err) => console.log(err))
    }
 
    render() { 
        return ( 
            <div>
    {this.state.students.map((student,index) => (
        <div key={index}>
  <Link to={`/students/${student._id}/show`}><h1>name : {student.name}</h1></Link>
       <button onClick={() => this.delete(student._id)}>Delete</button>
    </div>
    ))}
  <Link to={`/students/add`}>Add Student</Link>
        </div>
         );
    }
}
 
export default Student;