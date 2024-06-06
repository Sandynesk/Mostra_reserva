import './App.css';
import React from 'react';
import Cadastro from './components/Cadastro.js';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Senha from './components/Senha.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/cadastro' component={Cadastro} />
          <Route path='/password' component={Senha} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
