import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const App = _ =>
  <Router>
    <div>
      <Route exact path='/' component={_ => <Login />} />
      <Route exact path='/Home' component={_ => <Home />} />
    </div>
  </Router>

export default App
