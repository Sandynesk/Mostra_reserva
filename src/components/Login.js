import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Css/Login.css';  // Certifique-se de que o caminho está correto
import Fundo2 from '../Fotos/Fundo2.jpg';  // Substitua pelo caminho correto da sua imagem

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação aqui           
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-form-container">
          <Form onSubmit={handleLogin}>
            <h2 className="login-title">Login</h2>
            <h5 className='login-subtitle'>
              Olá, seja bem-vindo!
            </h5>

            <div className='Forms'>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
            </div>

            <div className='Enviar'>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
