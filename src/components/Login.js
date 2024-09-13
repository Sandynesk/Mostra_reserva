import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('token', response.data.token);
      alert('Login bem-sucedido!'); // Notifica o usuário sobre o sucesso
      // Redirecionar ou  realizar outra ação após o login bem-sucedido
      window.location.href = '/dashboard'; // Exemplo de redirecionamento
    } catch (error) {
      throw(error)
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuário:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Entrar</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
