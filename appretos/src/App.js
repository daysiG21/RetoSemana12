import React from 'react'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import TopNav from './Componentes/TopNav'

export default function App(){
  return (
    <Router>
      <TopNav />
      <div className="container">
        <Switch>
          <Routes />
        </Switch>
      </div>
    </Router>
  )
}