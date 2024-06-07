import './App.css';
import React from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Saiba from './components/Saiba.js'; // Importe o componente Saiba
import Senha from './components/Senha.js'; // Importe o componente Senha
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saiba" element={<Saiba />} /> {/* Corrija o caminho para "/saiba" */}
          <Route path='/login' component={Login} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/password' component={Senha} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
