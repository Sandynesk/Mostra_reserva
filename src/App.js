import './App.css';
import React from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Saiba from './components/Saiba.js'; // Importe o componente Saiba
import Senha from './components/Senha.js'; // Importe o componente Senha
import FaqHome from './components/FAQ/FaqHome.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForumHome from './components/Forum/ForumHome.js';
import Perfil from './components/Perfil';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saiba" element={<Saiba />} /> {/* Corrija o caminho para "/saiba" */}
          <Route path='/login' element={<Login/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/password' element={<Senha/>} />
          <Route path='/forum' element={<ForumHome/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/faq' element={<FaqHome/>} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
