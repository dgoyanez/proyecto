import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router';

const Pago = () => {

const navigate = useNavigate();
const volverHome =()=>{
    navigate(`/servicios`);
}

const [tarjeta, setTarjeta] = useState('');
const [card, setCard] = useState('');
const [name, setName] = useState('');
const [expiration, setExpiration] = useState('');

const agregarPago = ()=>{
    const pagousu ={
        tarjeta: tarjeta,
        card: card,
        name: name,
        expiration: expiration
    }

console.log(pagousu)

axios.post('http://localhost:8000/api/v1/pago', pagousu)
.then(res =>{
    alert(res.data)
}).then(err =>{console.log(err)})
}

return (
    <div className='blockpago'>
        <div>
            <h1 className='titlepago d-flex justify-content-center'>PROCESANDO PAGO DE SERVICIO</h1>
        </div>
        <div className='block'>
                <div className='mb-3'>
                    <label htmlFor='tarjeta' className='form-label'>seleccionar tarjeta</label>
                    <input type='text'  className='form-control' value={tarjeta} onChange={(e) =>{setTarjeta(e.target.value)}}></input>
                </div>
            <div className='mb-3'>
                <label htmlFor='card' className='form-label'>card number</label>
                <input type='number'  className='form-control'value={card} onChange={(e) =>{setCard(e.target.value)}}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='expiration' className='form-label'>expiration date</label>
                <input type='number'  className='form-control'value={expiration} onChange={(e) =>{setExpiration(e.target.value)}}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>full name</label>
                <input type='text'  className='form-control'value={name} onChange={(e) =>{setName(e.target.value)}}></input>
            </div>
        </div>
        <div className='btns d-flex'>
            <button className='btnpago' onClick={volverHome}>voler home</button>
            <button className='btnpago2'onClick={agregarPago}>COMPRAR SERVICIO</button>
        </div>
            
    </div>
)
}

export default Pago;
