import React,{useState,} from 'react'
import {Link,Redirect} from 'react-router-dom'

export default function TopNav(){
  const [estadoColapsado, setEstadoColapsado] = useState(true)
  const manejarColapso = ()=>setEstadoColapsado(!estadoColapsado)

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span>Reto Semana 12</span>
        <button
        className="custom-toggler navbar-toggler"
          data-toggle="collapse"
          data-target="#topnav"
          aria-expanded={!estadoColapsado ? true : false}
          onClick={manejarColapso}
          >
            <span className="navbar-toggler-icon" />
        </button>
        <div className={`${estadoColapsado? 'collapse':''} navbar-collapse`} id="topnav">
          <Link className="nav-link text-dark" to='/'>Objetivo 1</Link>
          <Link className="nav-link text-dark" to='/obj2'>Objetivo 2</Link>
         
        </div>

      </div>
    </nav>
  )
}