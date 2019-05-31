import React, { Component } from 'react'

class Login extends Component {
  render () {
    return (
            <>
              <h1>Login</h1>
              <form>
                <p>What is your name?</p>
                <input type='text' id='username' />
                <button>Login</button>
              </form>
            </>
    )
  }
}

export default Login
