import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
class ProtectedRoute extends React.Component {
  render () {
    const { component: Component, ...props } = this.props

    return (
      <Route
        {...props}
        render={props => (
          localStorage.getItem('Authenticate') !== 'false' ?
            <Component {...props} />
            : <Redirect to='/' />
        )}
      />
    )
  }
}
class App extends React.Component {
  render () {
    return (
      <Router>

        <Route exact path='/' component={_ => <Login />} />
        <ProtectedRoute path='/Home' component={_ => <Home />} />

      </Router>
    )
  }
}
export default App
