import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import ManageUsers from './components/admin/ManageUsers'

import Home from './components/Home'
import CreateBus from './components/buses/CreateBus'
import EditBus from './components/buses/EditBus'
import ShowBus from './components/buses/ShowBus'
 import BusIndex from './components/buses/busIndex'
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up/driver' exact render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up/' exact render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
  
          <AuthenticatedRoute user={user} path="/users" render={() => (
                <ManageUsers admin={user}></ManageUsers>
            
              )}/>   
       <AuthenticatedRoute user={user} path="/buses/new" render={() => (
          <CreateBus admin={user}></CreateBus>)}/>
        
        <AuthenticatedRoute user={user} path="/buses/:id/edit" render={(props) => (
          <EditBus admin={user}></EditBus>)}/>

          <AuthenticatedRoute user={user} path="/buses/:id/show" render={(props)=>(
            <ShowBus admin={user} busId={props.match.params.id}></ShowBus>
          )}/>
        
          <AuthenticatedRoute user={user} exact path= '/buses' render={()=>(
            <BusIndex admin={user}/>
          )}/>
        </main>

        <Route admin={user} path="/" exact render={() => (
          <Home admin={user}></Home>)}/>
        
        </React.Fragment>
        
    )
  }
}

export default App
