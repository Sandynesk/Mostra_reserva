

// npm install bootstrap
//npm install react-router-dom

// colocar foto

import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Css/Login.css';
import Fundo from '../Fotos/Fundo.png';



const senha = () => {
    const handlesenha = (e) => {
      e.preventDefault();
      alert('Email enviado com sucesso!');
    };


  return (
    

    <div className="fotoinha">
      <img  src={Fundo}></img>
    
    <div className="login-form">
       
        <h2>Recuperação de senha</h2>

        
        <Form onSubmit={handlesenha}>
          
          <div className='input-box'>

    <Form.Group controlId="formBasicEmail">
  
            <Form.Control type="email" placeholder="Digite seu email cadastrado" /> {/* colocar no back avisando quando o email nao e cadastrado */}
          </Form.Group>
          </div>


          <Button variant="primary" type="submit" block className="custom-button" id="custom-button">Enviar
    
    </Button>

    




        </Form>

      </div>
      </div>


  );
};


export default senha;