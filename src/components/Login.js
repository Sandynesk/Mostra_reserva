//comentar ccs
// descer a box 
// colocar foto

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Css/Login.css';
import teste1 from '../Fotos/teste1.jpg';



const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui           
  };

  return (


      <div className="login-form">
        <h2>Bem vindo de volta!</h2>
        
        <Form onSubmit={handleLogin}>
          
          <div className='input-box'>

    <Form.Group controlId="formBasicEmail">
  
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          </div>

          <div className='input-box'>
          <Form.Group controlId="formBasicPassword">
  
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/> Lembrar</label>
            <a href='#'> Esqueceu a senha?</a>
          </div>

          <Button variant="primary" type="submit" block className="custom-button">
    Entrar
    </Button>


          < div className='register-link'>
            <p> Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
          </div>




        </Form>
      </div>



  );
};


export default Login;

