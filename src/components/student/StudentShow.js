import React, { Component } from 'react';
import {show } from "./api"
import { Link, withRouter } from 'react-router';
import { Marker ,Map,GoogleApiWrapper } from 'google-maps-react';


class StudentShow extends Component {
    state = { 
     student:{
         name: "modhi",
         bus_no: "3",
         address: {
             latitude: "21.422510",
             longitude: "39.826168"
         }
     }
     
     }
     
 componentDidMount(){
     const studentId = this.props.match.params.studentId
     const user = this.props.user
    show(user, studentId)
    .then(
        res => {
            console.log(res)
            this.setState({
                name:res.data.student.name,
               
            })
        }
    )
    .catch(
        err => console.log(err)
    )
    }
 
    render() { 
      
        const mapStyles = {
            width: '40%',
            height: '40%',
          };
          const {name, bus_no, owner} = this.state.student
          const {latitude, longitude} = this.state.student.address
        const content = name.length ? (
            <div>
                <h3>{name}</h3>
                <h3>Bus:</h3>
                <h3>{bus_no}</h3>
                <h3>Location:</h3>
           <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={{ lat: latitude, lng: longitude}}
            >
                <Marker position={{ lat: latitude, lng: longitude}} />
            </Map>
        
            </div>
        ) : null
        return content
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyC_1OWcBHjxrGOMeeUcKpZsOrE89Kgbfuk'
  })(withRouter(StudentShow));