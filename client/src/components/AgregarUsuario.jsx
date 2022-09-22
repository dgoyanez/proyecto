import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import uniquid from 'uniqid';
import axios from 'axios';

const AgregarUsuario = () =>{

const [nombre, setNombre] = useState('')
const [servicio, setServicio] = useState('')
const [valor, setValor] = useState('')
const [email, setEmail] = useState('')
const [telefono, setTelefono] = useState('')
const [comuna, setComuna] = useState('')



const agregarRegistro = ()=>{
    const usuario ={
        nombre: nombre,
        servicio: servicio,
        valor: valor,
        email: email,
        telefono: telefono,
        comuna: comuna,
        idusuario: uniquid()
    }
    console.log(usuario)

    axios.post('http://localhost:8000/api/v1/usuarios', usuario)
    .then(res => {
        alert(res.data)
    }).then(err =>{console.log(err)})
}

  return (
    <div className='registro container'>
        <div className='row'>
            <h1 className='mt-4'>CREAR NUEVO USUARIO</h1>
        </div>
        <div className='row'>
            <div>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Nombre y Apellido</label>
                    <input type='text'  className='form-control' value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='servicio' className='form-label'>Servicio a ofrecer</label>
                    <input type='text'  className='form-control' value={servicio} onChange={(e) =>{setServicio(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='valor' className='form-label'>valor por hora($)</label>
                    <input type='text'  className='form-control' value={valor} onChange={(e) =>{setValor(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Correo electronico</label>
                    <input type='email'  className='form-control' value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='telefono' className='form-label'>Numero Telefonico</label>
                    <input type='text'  className='form-control' value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='comuna' className='form-label'>Nombre comuna</label>
                    <input type='text'  className='form-control' value={comuna} onChange={(e) =>{setComuna(e.target.value)}}></input>
                </div>
                <div className='container d-grip gap-2 d-sm-flex justify-content-sm-center'>
                      <button onClick={agregarRegistro} className='btn btn-outline-warning btn-lg'>REGISTRARME</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AgregarUsuario;
