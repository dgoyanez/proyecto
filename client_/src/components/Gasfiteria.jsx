import React from 'react'
import { useNavigate } from 'react-router';

const Gasfiteria = ()=> {

const navigate = useNavigate();

const volverHome =() =>{
        navigate(`/`);
    }

  return (
    <div>
      <p>GASFITERIA</p>
      <button type='button' class='btn btn-danger px-2 btn-lg' onClick={volverHome}>volver home</button>
    </div>
  )
}

export default Gasfiteria;
