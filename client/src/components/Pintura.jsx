import React from 'react'
import { useNavigate } from 'react-router';

const Pintura = () => {

const navigate = useNavigate();

const volverHome =()=>{
    navigate(`/`);
}

  return (
    <div className='container d-grip gap-2 d-sm-flex justify-content-sm-center'>
        <p class='mt-4'>SERVICIOS DE PINTURA</p>
        <button type='button' class='btn btn-danger px-2' onClick={volverHome}>volver home</button>
    </div>
  )
}

export default Pintura;
