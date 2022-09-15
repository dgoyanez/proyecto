import './App.css';
import React from 'react';
import Inicio from './components/inicio';
import { Route, Routes } from 'react-router-dom';
import Pintura from './components/Pintura';
import Gasfiteria from './components/Gasfiteria';
import Registro from './components/Registro';
import Electricidad from './components/Electricidad';
import Construccion from './components/Construccion';



function App() {
  return (
          <Routes>
            <Route path={"/"} element={<div><Inicio/></div>}/>
            <Route path={"/pintura"} element={<div><Pintura/></div>}/>
            <Route path={"/gasfiteria"} element={<div><Gasfiteria/></div>}/>
            <Route path={"/registro"} element={<div><Registro/></div>}/>
            <Route path={"/electricidad"} element={<div><Electricidad/></div>}/>
            <Route path={"/construccion"} element={<div><Construccion/></div>}/>
          </Routes>
  );
}

export default App;
