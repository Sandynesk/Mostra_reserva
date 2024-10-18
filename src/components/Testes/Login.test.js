import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';
import axios from 'axios';

jest.mock('axios');

describe('Componente Login', () => {
  beforeEach(() => {
    render(<Login />);
  });

  test('deve renderizar o formulário de login', () => {
    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  test('deve permitir que o usuário digite as credenciais', () => {
    fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'user1' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password1' } });
    
    expect(screen.getByLabelText(/usuário/i).value).toBe('user1');
    expect(screen.getByLabelText(/senha/i).value).toBe('password1');
  });

  test('deve chamar a API ao enviar o formulário', async () => {
    axios.post.mockResolvedValueOnce({ data: { token: 'fake_token' } });

    fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'user1' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password1' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/login', {
      username: 'usuario',
      password: 'senha123',
    });
  });

  test('deve exibir mensagem de erro em caso de credenciais inválidas', async () => {
    axios.post.mockRejectedValueOnce(new Error('Credenciais inválidas'));

    fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'usuario' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'senhaErrada' } });
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));

    const errorMessage = await screen.findByText(/credenciais inválidas/i);
    expect(errorMessage).toBeInTheDocument();
  });
});