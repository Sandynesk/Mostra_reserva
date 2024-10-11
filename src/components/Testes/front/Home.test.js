// src/components/Home.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders the homepage with all components', () => {
    render(<Home />);

    // Verifica se os componentes estão sendo renderizados
    expect(screen.getByText(/navbar/i)).toBeInTheDocument();
    expect(screen.getByText(/fundo/i)).toBeInTheDocument();
    expect(screen.getByText(/frente/i)).toBeInTheDocument();
    expect(screen.getByText(/card/i)).toBeInTheDocument();
    expect(screen.getByText(/info2/i)).toBeInTheDocument();
    expect(screen.getByText(/info/i)).toBeInTheDocument();
    expect(screen.getByText(/blocao/i)).toBeInTheDocument();
    expect(screen.getByText(/info3/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});
