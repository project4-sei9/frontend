import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/users">Manage Users</Link>
    <Link to="/buses/new">New</Link>
    <Link to="/buses/edit">update</Link>
    <Link to="/buses/g">Geo </Link>
    <Link to="/buses">allBus</Link>
    {/* <Link to="/change-password">Change Password</Link> */}
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/buses/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>KeepSave </h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
      
    </nav>
  </header>
)

export default Header
