import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Inicio = () =>{

useEffect(()=>{
    AOS.init()
},[])

    const navigate = useNavigate();


  // servicios
    const crearServicio = () =>{
        navigate(`/servicios`);
    }

    const crearRegistro =()=>{
        navigate(`/registro`);
    }

    return(
        <div className='inicial row'>
        <div className='col'>
          <div className="px-4 py-5 my-5 text-center" data-aos="zoom-in">
            <img className='img1 d-block mx-auto mb-0' src='https://i.pinimg.com/564x/9b/07/7c/9b077c85d99d59d4e0d0b505e8d151c0.jpg'/>
            <h1 className='title1 display-5 fw-bold'>¡Solucionamos los problemas del Hogar!</h1>
            <div className='col-lg-6 mx-auto'>
              <h2 className='subtitle lead mb-4'>Encuentra el servicios que necesitas ACA!</h2>
              <div className='d-grip gap-2 d-sm-flex justify-content-sm-center' data-aos="fade-up"
                  data-aos-duration="3000">
                <button type='button' className=' btn btn btn-primary px-4 btn-lg' onClick={crearServicio}>SERVICIOS</button>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <button type='button' className='btn1 btn btn-outline-dark mt-4 px-2 btn-lg' onClick={crearRegistro}>REGISTRATE!</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Inicio;