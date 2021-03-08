
import axios from "axios"

const URL="https://601e0134be5f340017a1a122.mockapi.io/productos"

const obtenerProducto = async()=>{
  try{    
    let {data} = await axios.get(URL)
    return data //es un json
  }
  catch(error){
    return error
  }  
}

const eliminarProducto = async (id) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }
    let {data} = await axios.delete(`${URL}/${id}`, {headers})
    return data
  } catch (error) {
    return error
  }
}

export {
  obtenerProducto,
  eliminarProducto
}