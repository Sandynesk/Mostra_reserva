// src/components/Cadastro.js
import React, { useState } from 'react';
import axios from 'axios';
import './Css/Cadastro.css'; // Importar o CSS específico para o cadastro
import Mulherlogin from '../Fotos/MuleBonita.jpg'; // Usar a mesma imagem, se desejar

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Novo estado para o email
  const [gender, setGender] = useState(''); // Novo estado para o gênero
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/cadastro', { username, email, gender, password });
      alert('Cadastro bem-sucedido!'); // Notifica o usuário sobre o sucesso
      // Redirecionar ou realizar outra ação após o cadastro bem-sucedido
      window.location.href = '/login'; // Exemplo de redirecionamento
    } catch (error) {
      setError('Erro ao cadastrar. Tente novamente.');
    }
  };

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
