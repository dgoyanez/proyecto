import React from 'react'
import { useNavigate } from 'react-router'

function Construccion() {

const navigate = useNavigate();

const volverHome =()=>{
    navigate(`/`);
}
  return (
    <div className='container d-grip gap-2 d-sm-flex justify-content-sm-center'>
        <p class='mt-4'>SERVICIOS DE CONSTRUCCION</p>
        <button type='button' class='btn btn-danger px-2' onClick={volverHome}>volver home</button>
    </div>
  )
}

export default Construccion
