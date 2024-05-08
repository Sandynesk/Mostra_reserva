import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from '../Footer.js';

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

    // Verifica se as URLs corretas foram abertas em novas guias
    expect(window.open).toHaveBeenCalledTimes(4);
    expect(window.open).toHaveBeenNthCalledWith(1, 'https://www.facebook.com', '_blank');
    expect(window.open).toHaveBeenNthCalledWith(2, 'https://www.twitter.com', '_blank');
    expect(window.open).toHaveBeenNthCalledWith(3, 'https://www.instagram.com', '_blank');
    expect(window.open).toHaveBeenNthCalledWith(4, 'https://www.linkedin.com', '_blank');
  });
});
