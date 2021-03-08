import React,{useState, useEffect} from 'react'
import {obtenerProducto,eliminarProducto} from '../Services/productoServices'
import Swal from 'sweetalert2'
import {useHistory,Link} from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';

export default function Objetivo1View(){
  let history = useHistory()
  const [productos, setProductos] = useState([])

  const getProducts = async()=>{
    let response = await obtenerProducto()
   
    setProductos(response)
  }

  useEffect(()=>{
    getProducts()
  },[])

  const eliminar =async (id)=>{

   let response = await eliminarProducto(id)
    
   Swal.fire({      
    title:'Eliminado!',
    text:'El registro ha sido eliminado',
    icon:'success',
    html:'El registro ha sido eliminado<hr/>'
  }).then(()=>{   
    getProducts()
  })
  }

  let columns =[
    {field:'producto_nombre',headerName:'Nombre',width:400},
    {field:'producto_descripcion',headerName:'Descripción',width:400},
    {field:'producto_precio',headerName:'Precio',width:100},
    {
      field: "id",
      headerName: "Acciones",
      renderCell: (params) => (
        <div>         
          <Link className="btn btn-danger" onClick={()=>{eliminar(params.value)}}>
            <i className="fas fa-trash"></i>
          </Link>
        </div>
      ),
      width:200
    },
  ];
  
  return (
    <div className="mt-3">
    <h1 className="display-4">Objetivo 1</h1>
    <div className="row">      
      <div style={{width:'100%', height:'600px'}}>
        <DataGrid rows={productos} columns={columns} pageSize={10}/>
      </div>
    </div>
  </div>
  )
}