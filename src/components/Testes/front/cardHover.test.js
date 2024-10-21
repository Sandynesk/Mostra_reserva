import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importação correta
import Card from '../../Card.js';

describe('Card Component', () => {
    test('applies hover styles correctly', () => {
        render(<Card />);
        
        const userMessage = screen.getByText(/Usuário: Oi, como pode me ajudar hoje?/i);
        const consuwebMessage = screen.getByText(/ConsuWeb: Olá! Estou aqui para responder suas dúvidas sobre direitos do consumidor./i);

        // Simula hover no usuário
        userMessage.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        expect(userMessage).toHaveStyle('background-color: #775310'); // Estilo esperado para hover

        // Simula hover no consuweb
        consuwebMessage.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        expect(consuwebMessage).toHaveStyle('background-color: #1f1442'); // Estilo esperado para hover
    });
});
