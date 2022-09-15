import React from 'react'

function AgregarUsuario() {
  return (
    <div className='container'>
        <div className='row'>
            <h1 className='mt-4'>CREAR NUEVO USUARIO</h1>
        </div>
        <div className='row'>
            <div>
                <div className='mb-3'>
                    <label htmlFor='nombre' className='form-label'>Nombre</label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='servicio' className='form-label'>Servicio a ofrecer</label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='valor' className='form-label'>valor por hora($)</label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Correo electronico</label>
                    <input type='email' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='telefono' className='form-label'>Numero Telefonico</label>
                    <input type='number' className='form-control'></input>
                </div>
                <div className='container d-grip gap-2 d-sm-flex justify-content-sm-center'>
                    <button className='btn btn-outline-warning btn-lg'>REGISTRARME</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AgregarUsuario
