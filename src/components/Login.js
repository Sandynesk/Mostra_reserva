import React, { useState } from 'react';
import axios from 'axios';
import './Css/Login.css'; // Certifique-se de criar um arquivo CSS para isso
import Mulherlogin from'../Fotos/MuleBonita.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login bem-sucedido!'); // Notifica o usuário sobre o sucesso
      // Redirecionar ou  realizar outra ação após o login bem-sucedido
      window.location.href = '/dashboard'; // Exemplo de redirecionamento
    } catch (error) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="box">
      <div className="img-box">
        <img src={Mulherlogin} alt="Imagem do Formulário" />
      </div>
      <div className="form-box">
        <h2>Login</h2>
        <p>Não tem uma conta? <a href="/cadastro">Criar conta</a></p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Digite seu usuário" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Digite sua senha" 
              required 
            />
          </div>
          <div className="input-group">
            <button type="submit">Entrar</button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
