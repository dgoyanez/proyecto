import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router';


function UsuarioIndividual({usuario}) {

useEffect(()=>{
    AOS.init()
},[])

const navigate = useNavigate();
const volverHome =()=>{
    navigate(`/pago`);
}

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md' data-aos="zoom-in">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='https://kinsta.com/es/wp-content/uploads/sites/8/2017/07/carga-masiva.png' />
                <Card.Body>
                    <Card.Title>Nombre: {usuario.nombre}</Card.Title>
                    <Card.Text>
                        <ul className='list-group'>
                            <li className='list-group-item'>Servicio: {usuario.servicio}</li>
                            <li className='list-group-item'>Valor: ${usuario.valor}</li>
                            <li className='list-group-item'>Correo: {usuario.email}</li>
                            <li className='list-group-item'>Telefono: {usuario.telefono}</li>
                            <li className='list-group-item'>Comuna: {usuario.comuna}</li>
                        </ul>
                    </Card.Text>
                    <Button onClick={volverHome} variant="primary">Adquirir SERVICIO!</Button>
                </Card.Body>
            </Card>
            </div>
        </div>
    </div>
  )
}

export default UsuarioIndividual;
