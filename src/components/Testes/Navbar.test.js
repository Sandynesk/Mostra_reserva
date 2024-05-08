import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';



// testes de renderização

describe('Navbar component', () => {
  test('renders logo', () => {
    const { getByAltText } = render(<Navbar />);
    const logoElement = getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    const { getByText } = render(<Navbar />);
    const telaInicialLink = getByText('Tela incial');
    const saibaMaisLink = getByText('Saiba mais!');
    const servicosLink = getByText('Serviços');
    expect(telaInicialLink).toBeInTheDocument();
    expect(saibaMaisLink).toBeInTheDocument();
    expect(servicosLink).toBeInTheDocument();
  });

  test('renders "Saiba seus direitos!" button', () => {
    const { getByRole } = render(<Navbar />);
    const saibaSeusDireitosButton = getByRole('button', { name: 'Saiba seus direitos!' });
    expect(saibaSeusDireitosButton).toBeInTheDocument();
  });
});
