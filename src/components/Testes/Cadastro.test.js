import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Cadastro from '../Cadastro'; // Ajuste o caminho conforme necessário
import axios from 'axios';

// Mock do axios
jest.mock('axios');

describe('Cadastro Component', () => {
  beforeEach(() => {
    render(<Cadastro />);
  });

  test('deve renderizar os campos de entrada e o botão', () => {
    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gênero/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  test('deve permitir o envio do formulário com dados válidos', async () => {
    axios.post.mockResolvedValueOnce({ data: { token: 'fake-token' } });

    fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'user1' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user1@example.com' } });
    fireEvent.change(screen.getByLabelText(/gênero/i), { target: { value: 'masculino' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password1' } });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), { target: { value: 'password1' } });

    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/cadastro', {
        username: 'user1',
        email: 'user1@example.com',
        gender: 'masculino',
        password: 'password1'
      });
      expect(window.location.href).toBe('/login'); // Isso pode precisar ser alterado para não testar o redirecionamento.
    });
  });

  test('deve exibir mensagem de erro com dados inválidos', async () => {
    axios.post.mockRejectedValueOnce({ response: { data: 'Erro ao cadastrar' } });

    fireEvent.change(screen.getByLabelText(/usuário/i), { target: { value: 'user1' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'user1@example.com' } });
    fireEvent.change(screen.getByLabelText(/gênero/i), { target: { value: 'masculino' } });
    fireEvent.change(screen.getByLabelText(/senha/i), { target: { value: 'password1' } });
    fireEvent.change(screen.getByLabelText(/confirmar senha/i), { target: { value: 'senhaErrada' } });

    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/erro ao cadastrar/i)).toBeInTheDocument(); // Corrigir para refletir a mensagem de erro real.
    });
  });
});
