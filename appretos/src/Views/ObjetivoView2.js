import React,{useState} from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import L from 'leaflet'

export default function ObjetivoView2(){
  const [coordenada, setCoordenada] = useState([0, 0])

  return (
    <div className="mt-3">
    <h1 className="display-4">Objetivo 2</h1>
    <div className="row"> 
    <div className="col-lg-12">
    <MapContainer
      center={[-11.9676321,-76.9905149]} 
      zoom={15} 
      style={{height:'500px'}}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {          
          <Marker position={[-11.9676321,-76.9905149]}>
            <Popup>
              <h6 style={{fontWeight: '700'}}>Agente Interbank</h6>
              <p>
              <span>Banco</span><br/>
              LOS ASTRONOMOS MZ I4 LT 4 AAHH, Jesús Alberto Páez, LIMA 15096
              </p>
              
              
            </Popup>
          </Marker>           
        }
        
      </MapContainer>
      </div>     
      
    </div>
  </div>
  )
}