import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

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



  test('toggles navigation menu on button click', () => {
    const { getByTestId } = render(<Navbar />);
    const toggleButton = getByTestId('toggle-button');

    fireEvent.click(toggleButton);

    // Verifica se o menu está visível após o clique
    const menu = getByTestId('navbarSupportedContent');
    expect(menu).toHaveClass('collapse', 'navbar-collapse', 'justify-content-center');
  });


  
  test('navigation links nos seus respectivos atributos', () => {
    const { getByText } = render(<Navbar />);
    const telaInicialLink = getByText('Tela incial');
    const saibaMaisLink = getByText('Saiba mais!');
    const servicosLink = getByText('Serviços');
    expect(telaInicialLink.closest('a')).toHaveAttribute('href', '#');
    expect(saibaMaisLink.closest('a')).toHaveAttribute('href', '#');
    expect(servicosLink.closest('a')).toHaveAttribute('href', '#');
  });
});


/* Testes de Renderização:

Logo: Verifica se o elemento com o texto alternativo 'Logo' está presente no documento.

Links de Navegação: Verifica se os links 'Tela incial', 'Saiba mais!', e 'Serviços' estão presentes no documento.

Botão: Verifica se o botão 'Saiba seus direitos!' está presente no documento.

  Testes de Funcionalidade:

Menu de Navegação: Testa se o menu de navegação colapsa e expande ao clicar no botão de alternância.
Testes de Atributos de Links:

URLs dos Links: Verifica se os links de navegação têm os atributos href corretos.*/