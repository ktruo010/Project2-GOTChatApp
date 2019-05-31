import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = _ =>
  <Router>
    <div>
      <Route exact path='/' component={_ => <Home />} />
    </div>
  </Router>

export default App
