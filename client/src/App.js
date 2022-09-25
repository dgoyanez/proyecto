import './App.css';
import React from 'react';
import Inicio from './components/inicio';
import { Route, Routes } from 'react-router-dom';
import Servicios from './components/Servicios';

import Registro from './components/Registro';
import Pago from './components/Pago';




function App() {
  return (
          <Routes>
            <Route path={"/"} element={<div><Inicio/></div>}/>
            <Route path={"/servicios"} element={<div><Servicios/></div>}/>
            <Route path={"/registro"} element={<div><Registro/></div>}/>
            <Route path={"/pago"} element={<div><Pago/></div>}/>
          </Routes>
  );
}

export default App;
