import React from 'react'
import {useNavigate} from 'react-router';

const Pago = () => {

const navigate = useNavigate();
const volverHome =()=>{
    navigate(`/servicios`);
}

return (
    <div className='blockpago'>
        <div>
            <h1 className='titlepago d-flex justify-content-center'>PROCESANDO PAGO DE SERVICIO</h1>
        </div>
        <div className='block'>
            <div>
                <p className='sub1'>seleccionar tarjeta</p>
            </div>
            <div>
                <p>card number</p>
            </div>
            <div>
                <p>expiration date</p>
            </div>
            <div>
                <p>full name</p>
            </div>
        </div>
        <div className='btns d-flex'>
            <button className='btnpago' onClick={volverHome}>voler home</button>
            <button className='btnpago2'>COMPRAR SERVICIO</button>
        </div>
            
    </div>
)
}

export default Pago;
