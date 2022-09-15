import React from "react";
import { useNavigate } from "react-router";

const Inicio = () =>{

    const navigate = useNavigate();

    const crearPintura = () =>{
        navigate(`/pintura`);
    }

    const crearGas = () =>{
        navigate(`/gasfiteria`);
    }

    const crearRegistro =()=>{
        navigate(`/registro`);
    }

    const crearElect =()=>{
        navigate(`/electricidad`);
    }

    const crearConst =()=>{
        navigate(`/construccion`);
    }

    return(
        <div className='row'>
        <div className='col'>
          <div class="px-4 py-5 my-5 text-center">
            <img class='d-block mx-auto mb-0' src='https://i.pinimg.com/564x/9b/07/7c/9b077c85d99d59d4e0d0b505e8d151c0.jpg'/>
            <h1 class='display-5 fw-bold'>Solucionamos tus problemas del hogar</h1>
            <div class='col-lg-6 mx-auto'>
              <p class='lead mb-4'>selecciona el servicio que deseas contratar</p>
              <div class='d-grip gap-2 d-sm-flex justify-content-sm-center'>
                <button type='button' class='btn btn-primary px-4 btn-lg' onClick={crearPintura}>PINTURA</button>
                <button type='button' class='btn btn-info btn-lg' onClick={crearGas}>GASFITERIA</button>
                <button type='button' class='btn btn-success btn-lg' onClick={crearElect}>ELECTRICIDAD</button>
                <button type='button' class='btn btn-danger px-2 btn-lg' onClick={crearConst}>CONSTRUCCION</button>
              </div>
              <div>
                <button type='button' class='btn btn-outline-dark mt-4 px-2 btn-lg' onClick={crearRegistro}>REGISTRARME</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Inicio;