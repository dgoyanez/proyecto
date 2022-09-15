import React from 'react'
import { useNavigate } from 'react-router';
import AgregarUsuario from './AgregarUsuario';

const Registro = ()=>{

const navigate = useNavigate();

const volverHome =()=>{
    navigate(`/`);
}

    return(
    <div className='container d-grip gap-2 d-sm-flex justify-content-sm-center'>
        <div className='row'>
            <AgregarUsuario/>
            <button type='button' class='btn btn-danger px-2 mt-4' onClick={volverHome}>volver home</button>
        </div>
    </div>

    )
}

export default Registro;