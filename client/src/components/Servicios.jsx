import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import UsuarioIndividual from './UsuarioIndividual';

const Servicios = () => {

const [datos, setDatos] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:8000/api/v1/usuarios')
  .then(res =>{
    console.log(res.data)
    setDatos(res.data.datos)
  }).catch(err => {console.log(err)})
},[])

const listaregistro = datos.map(usuario =>{
  return(
    <div>
      <UsuarioIndividual usuario={usuario}/>
    </div>
  )
})

const navigate = useNavigate();
const volverHome =()=>{
    navigate(`/`);
}

  return (
    <div className='service'>
        <div className='row'>
          <h1 className='title2 mt-4 d-flex justify-content-center'>SERVICIOS DISPONIBLES!</h1>
        </div>
        <button type='button' className='btn btn-lg btn-warning px-2' onClick={volverHome}>volver home</button>
        <div className='container gap-2 d-flex justify-content-center'>
          {listaregistro}
        </div>
    </div>
  )
}

export default Servicios;
