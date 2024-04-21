import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Card from './components/Card.js';
import Interesse from './components/Interesse';
import Frente from './components/Frente.js';
import Footer from './components/Footer.js';
import Fundo from './components/Fundo.js';
import Info2 from './components/Info2.js';


function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <Fundo />
      <Frente />
      <Card />
      <Info2 />
      <Interesse />
      <Info />
      <Footer/>
    {/* Outros conteúdos do seu aplicativo */}
    </div>
  );
}

export default App;
