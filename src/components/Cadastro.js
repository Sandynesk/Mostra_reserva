import React, { useState } from 'react';
import './Css/Cadastro.css'

function Cadastro() {
    const [form, setForm] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      birthdate: '',
      rememberMe: false,
    });
  
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    const birthDate = new Date(form.birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      newErrors.birthdate = 'Você deve ter pelo menos 18 anos';
    }
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Enviar dados do formulário
      console.log('Formulário enviado', form);
    }
  };


  return (
    <div className="Cadastro_body">
    <div className="cadastro-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Repetir Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Data de Nascimento:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
            required
          />
          {errors.birthdate && <p className="error">{errors.birthdate}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={form.rememberMe}
              onChange={handleChange}
            />
            Lembrar de mim
          </label>
        </div>
        <button className="cadastrar-btn" type="submit">Cadastrar</button>
      </form>
    </div>
</div>
  );
}

export default Cadastro;