import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Details from './Pages/Details'
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home'
import './App.css'
function App() {
 

  return (
    <div className="App">
      
      <Router>
        <Switch>
        
        <Route exact path="/">
        <NavBar />
            <Home />
        </Route>
        <Route path="/details">
        <NavBar />
             <Details />
        </Route>
        </Switch>
      </Router>
      
      
    </div>
  )
}

export default App
