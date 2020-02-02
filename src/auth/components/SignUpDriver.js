import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../api'
import messages from '../messages'

class SignUpDriver extends Component {
  constructor () {
    super()

    this.state = {
      name:'',
      email: '',
      password: '',
      passwordConfirmation: '',
      number:''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUpDriver(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ name:"",email: '', password: '', passwordConfirmation: '',number:'' })
        alert(messages.signUpFailure, 'danger')
      })
  }

  render () {
    const { name, email, password, passwordConfirmation , number} = this.state
     //console.log(this.state.driver)
    return (
      <form className='auth-form' onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>
        
        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={name}
          type="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <label htmlFor="number">Contact Number</label>
        <input
          required
          name="number"
          value={number}
          type="number"
          placeholder="Number"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

export default withRouter(SignUpDriver)
