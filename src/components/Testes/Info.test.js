import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Info from '../Info';

describe('Info component', ()=>{
test('Renderiza o componente Info', () => {
  const { getByText } = render(<Info />);
  const titulo = getByText('Saiba direito dos seus direitos!'); // Verifica se o título está presente
  expect(titulo).toBeInTheDocument();
});

// Verifica se os links redirecionam corretamente
test('Redireciona para a página de login', () => {
  const { getByText } = render(<Info />);
  const linkEntrar = getByText('Entrar');
  fireEvent.click(linkEntrar); // "Clica" no link "Entrar"
  // Adiciona asserções para verificar se a página de login é exibida corretamente
});

test('Redireciona para a página de cadastro', () => {
  const { getByText } = render(<Info />);
  const linkCadastrar = getByText('Cadastre-se');
  fireEvent.click(linkCadastrar); // "Clica" no link "Cadastre-se"
  // Adiciona asserções para verificar se a página de cadastro é exibida corretamente
});


})