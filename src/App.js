import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js'; // Importe o componente Navbar
import Info from './components/Info';
import Card from './components/Card.js';
import Interesse from './components/Interesse';
import Frente from './components/Frente.js';



function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <Frente />
      <Card />
      <Info />
      <Interesse />
    {/* Outros conteúdos do seu aplicativo */}
    </div>
  );
}

export default App;
