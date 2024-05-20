import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Blocao from '../Blocao';

describe('Navbar component', () => { /* */
test('componets Blocao', () => {
    const { getByTestId } = render(<Blocao />); /* essa linha puxa o blocao */
    const bumcard = getByTestId('b1'); /* puxa a constante pela id do teste */
    const bdoiscard = getByTestId('b2'); /* puxa a constante pela id do teste */
    const btrescard = getByTestId('b3'); /* puxa a constante pela id do teste */
    expect(bumcard).toBeInTheDocument(); /* espera que a constante esteja no documento */
    expect(bdoiscard).toBeInTheDocument(); /* espera que a constante esteja no documento */
    expect(btrescard).toBeInTheDocument(); /* espera que a constante esteja no documento */
  });

});