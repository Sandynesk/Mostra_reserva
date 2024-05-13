import React, { useState } from 'react';
import './Css/Stylecadastro.css'

function Cadastro() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthDate: '',
        rememberMe: false,
        termsOfUse: false
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert('As senhas não coincidem!');
        } else if (new Date().getFullYear() - new Date(form.birthDate).getFullYear() < 18) {
            alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        } else {
            console.log(form);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" onChange={handleChange} placeholder="Nome" required />
            <input type="text" name="lastName" onChange={handleChange} placeholder="Sobrenome" required />
            <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" onChange={handleChange} placeholder="Senha" required />
            <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirmar senha" required />
            <input type="date" name="birthDate" onChange={handleChange} required />
            <label>
                <input type="checkbox" name="rememberMe" onChange={handleChange} />
                Lembre de mim
            </label>
            <label>
                <input type="checkbox" name="termsOfUse" onChange={handleChange} required />
                Aceito os termos de uso
            </label>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default Cadastro;
