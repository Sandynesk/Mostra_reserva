// src/components/Cadastro.js
import React, { useState } from 'react';
import axios from 'axios';
import './Css/Cadastro.css'; // Importar o CSS específico para o cadastro
import Mulherlogin from '../Fotos/MuleBonita.jpg'; // Usar a mesma imagem, se desejar

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/cadastro', { username, password, gender, email });
      console.log('Response:', response); // Adicione um log para ver a resposta
      localStorage.setItem('token', response.data.token);
      alert('Cadastro bem-sucedido!'); // Notifica o usuário sobre o sucesso
      window.location.href = '/login'; // Redireciona para a página principal

    } catch (error) {
      console.error('Error:', error.response?.data || error.message); // Mostra detalhes do erro
      setError(error.response?.data || 'Ocorreu um erro ao cadastrar-se. Tente novamente mais tarde.');
    }
}

  
  return (
    <div className="box">
      <div className="img-box">
        <img src={Mulherlogin} alt="Imagem do Formulário" />
      </div>
      <div className="form-box">
        <h2>Cadastro</h2>
        <p>Já tem uma conta? <a href="/login">Fazer login</a></p>
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
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Digite seu email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="gender">Gênero</label>
            <select 
              id="gender" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              required
            >
              <option value="">Selecione seu gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
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
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input 
              type="password" 
              id="confirm-password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              placeholder="Confirme sua senha" 
              required 
            />
          </div>
          <div className="input-group">
            <button type="submit">Cadastrar</button>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
