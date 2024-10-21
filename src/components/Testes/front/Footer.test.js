import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from '../../Footer.js';

describe('Footer component behavior', () => {
  test('clicking social media links opens them in new tabs', () => {
    const { getByTestId } = render(<Footer />);
    const facebookLink = getByTestId('facebook-link');
    const twitterLink = getByTestId('twitter-link');
    const instagramLink = getByTestId('instagram-link');
    const linkedinLink = getByTestId('linkedin-link');

    // Simula cliques nos links de redes sociais
    fireEvent.click(facebookLink);
    fireEvent.click(twitterLink);
    fireEvent.click(instagramLink);
    fireEvent.click(linkedinLink);

    // Verifica se os links possuem o atributo target="_blank"
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(twitterLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });
});

