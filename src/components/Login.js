import React from 'react';
import './Css/Login.css'
import { Button, Form } from 'react-bootstrap';





const Login = () => {

  const handleLogin = (e) => { //função  que e chamada qnd o user clica em logar 

    e.preventDefault(); // isso aqui impede que, ao enviar o formulario (clicando em logar), a pg recarregue
  };


  return ( //estrutura da pg comeca aqui
    <div className="login-conteiner">
      <h2>Entre com sua conta</h2>  
      
      <Form onSubmit={handleLogin}> {/* qnd o user clicar em enviar esse formulario ira chamar a função handlelogin */}
        
        <div className='input-box'>

<Form.Group controlId="formBasicEmail"> {/* grupo de formulario da biblioteca REACT que agrupa o form de email */}
        {/*   <Form.Label>Email</Form.Label> */}
          <Form.Control type="email" placeholder="Seu email" /> {/* campo de entrada para o email do user */}
        </Form.Group>
        </div>

        <div className='input-box'>
        <Form.Group controlId="formBasicPassword">
          {/* <Form.Label>Senha</Form.Label> */}
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        </div>

        <div className='lembrar-senha'>
          <label><input type='checkbox'/> Lembrar</label>
          <a className='style-link' href='#'> Esqueceu a senha?</a>
        </div>

        <Button variant="primary" type="submit" block className="custom-button">
Entrar
</Button>


        < div className='register-link'>
          <p> Não tem uma conta? <a className='style-link' href="/register">Registre-se</a></p>
        </div>




      </Form>
    </div>
  );
};

export default Login;