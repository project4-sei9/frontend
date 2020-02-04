import React, { Component } from 'react';
import {update,show} from "./api"
import {withRouter} from "react-router-dom"
import { Marker ,Map,GoogleApiWrapper } from 'google-maps-react';

//  import {marker,Map, GoogleApiWrapper } from 'google-map-react'
//import location from '@derhuerst/browser-location'
class EditBus extends Component {
    state = { 
        bus:{
            bus_no: 0,
            status: "" ,//pickup = false , dropOff = true 
            location:  { 
                latitude:"",
                longitude: ""
               }
            }
   }
    async componentWillMount(){ // show bus info 
        const user = this.props.admin
        const busId = this.props.match.params.id 
        await show(user,busId)
        .then((res)=>{
            const bus = res.data.bus
            this.setState({ bus:bus })
            console.log(this.state.bus)
        })
        .catch((err)=>console.log(err))
        await this.getLocation()
    }
    getLocation = () => {
        console.log("inside getlocation")
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(this.showPosition,this.showError);
        } else {
            //
        } 
    }
     showPosition =(position) => {
        // const cplong =position.coords.longitude
        // const cplat =position.coords.latitude
        const loc = { 
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        const copyBus = {...this.state.bus}
        copyBus.location = loc
        console.log(loc)
        this.setState({   
            bus:copyBus
        }
        )
        console.log(this.state)
    }
    showError  = (error) => {
        return "error"
    }
    
    handleChange = (event) => {
        // //get the name of input
        const name = event.target.name;
        // // get the value of input
        const value = event.target.value;
         const newForm = Object.assign(this.state.bus)
         newForm[name] = value;
         this.setState({
            bus:newForm,
        })
        console.log(this.state.bus)
    }
    // getLocation() {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //     console.log( "Geolocation is not supported by this browser.")
    //     }
    //   }
    //   showPosition() {
    //     console.log( `"Latitude: ${this.props.coords.latitude} 
    //     "Longitude:   ${this.props.coords.longitude}`)
    //   }
        // showPosition(position) {
            //   let latlon = position.coords.latitude + "," + position.coords.longitude;
            //     var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=
            //     "+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyC_1OWcBHjxrGOMeeUcKpZsOrE89Kgbfuk`;
            //  getLocation() {
            //     if (navigator.geolocation) {
            //       navigator.geolocation.getCurrentPosition(showPosition);
            //     } else {
            //     console.log( "Geolocation is not supported by this browser.")
            //     }
            //   }
            //   showPosition() {
            //     console.log( `"Latitude: ${this.props.coords.latitude} 
            //     "Longitude:   ${this.props.coords.longitude}`)
            //   }
        //}
    handleSubmit = (event) => {
          event.preventDefault();
        //   const cplat = {...this.state.bus.location.latitude}
        //   const cplong = {...this.state.bus.location.longitude}
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
//console.log(this.state.bus.bus_no)
        // this.getLocation()
        // this.showPosition()
        const mapStyles = {
            width: '40%',
            height: '40%',
          };
        return ( 
            <div className="EditBus">
               <form onSubmit={this.handleSubmit}>
        <label>Bus Number:{this.state.bus.bus_no}</label>  <br/>  
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
          <Map
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: this.state.bus.location.latitude, lng: this.state.bus.location.longitude}}
            >
                <Marker position={{ lat: this.state.bus.location.latitude, lng: this.state.bus.location.longitude}} />
            </Map>
        </div>
         );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyD9eo_qfsgmA2pYn8EQnM1ij24xzfOKtQQ'
  })(withRouter(EditBus));