import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Home extends Component {

state = {
  guardian:false,
  driver:false
}
  
   
  render () {
    
    return (
            <div>
            <Link to='/sign-up/driver'>Driver</Link>
            <Link to='/sign-up'>Guardian</Link> 
            </div>
    )
  }
}

export default withRouter(Home)
