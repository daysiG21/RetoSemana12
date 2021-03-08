import React,{Fragment} from 'react'
import {Route} from 'react-router-dom'
import Objetivo1View from './Views/Objetivo1View'
import ObjetivoView2 from './Views/ObjetivoView2'

export default function Routes(){

  return (
    <Fragment>
      <Route path="/" exact component ={Objetivo1View} />
      <Route path="/obj2" exact component={ObjetivoView2} />
    </Fragment>
  )
}