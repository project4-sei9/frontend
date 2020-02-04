import React, { Component } from 'react';
import {show } from "./api"
import { Link, withRouter } from 'react-router';
import { Marker ,Map,GoogleApiWrapper } from 'google-maps-react';


class StudentShow extends Component {
    state = { 
     student:{
         name: "0",
         bus_no: "3",
         address: {
             latitude: "21.422510",
             longitude: "39.826168"
         }
     }
     
     }
     componentWillMount(){
        //  console.log('----')
        // console.log(this.state.student)
     }
 componentDidMount(){
    // console.log(this.state.student.name.length)
     const studentId = this.props.match.params.studentId
     const user = this.props.user
    show(user, studentId)
    .then(
        res => {
            console.log(res)
            this.setState({
                student:res.data.student
            },(() => { 
                console.log('----++++')
                console.log(this.state.student)
        }))
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
        const content= this.state.student.name?
         (
            <div>
                <h3>{this.state.student.name}</h3>
            
                <h3>Location:</h3>
           <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: this.state.student.address.latitude, lng: this.state.student.address.longitude}}
            >
                <Marker position={{ lat: this.state.student.address.latitude, lng: this.state.student.address.longitude}} />
            </Map>
        
            </div>
        ) : <div></div>
        // console.log('------')
        // console.log(content)
        return content
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9eo_qfsgmA2pYn8EQnM1ij24xzfOKtQQ'
  })(withRouter(StudentShow));