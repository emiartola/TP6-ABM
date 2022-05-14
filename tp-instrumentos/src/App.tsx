import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Productos } from './components/Productos';
import { DetalleInstrumento } from './components/DetalleInstrumento';
import { DondeEstamos } from './components/DondeEstamos';
import { Home } from './components/Home';
import { GrillaInstrumentos } from './components/GrillaInstrumento';
import { Formulario } from './components/Formulario';


class App extends Component{
  
  render(){
    return (
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/instrumentos" element={<Productos/>}/>
            <Route path="/instrumentos">
              <Route path=":id" element={<DetalleInstrumento/>} />
            </Route>
            <Route path="*" element={<Productos/>}/>
            <Route path="/DondeEstamos" element={<DondeEstamos/>}/>
            <Route path="/Grilla" element={<GrillaInstrumentos/>}/>
            <Route path="/instrumentosbuscar/:termino" element={< Productos/>}/>
            <Route path="/formulario/:id" element={<Formulario />}/>
          </Routes>
    );
  }
}

export default App;
