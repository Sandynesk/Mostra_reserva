import './App.css';
import React from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Senha from './components/Senha.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">     {/* Coloque aqui apenas o nome de cada pagina*/}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/password' element={<Senha/>} />
         </Routes>
      </BrowserRouter>
      
    {/* Outros links dentro do site */}
    </div>
  );
}


export default App;