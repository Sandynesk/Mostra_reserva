import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Card from './components/Card.js';
import Frente from './components/Frente.js';
import Footer from './components/Footer.js';
import Fundo from './components/Fundo.js';
import Info2 from './components/Info2.js';
import Blocao from './components/Blocao.js';
import Info3 from './components/Info3.js';
import Login from './components/Login.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
      <Fundo />
      <Frente />
      <Card />
      <Info2 />
      <Info />
      <Blocao />
      <Info3 />
      <Footer/>
    {/* Outros conteúdos do seu aplicativo */}
    </div>
  );
}

export default App;