import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Saiba from './components/Saiba';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="saiba" element={<Saiba/>} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
