import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import { NAV } from '../constants/general'
import Nav from './Nav';

describe('Nav', () => {
  it('renders the card', async() => {
    const { queryByText } = render(<Router><Nav /></Router>);
    await waitFor(() => {
      expect(queryByText(NAV[0].title)).toBeInTheDocument();
      expect(queryByText(NAV[1].title)).toBeInTheDocument();
      expect(queryByText(NAV[2].title)).toBeInTheDocument();
      expect(queryByText('monkey baloons')).not.toBeInTheDocument();
    });
  });
});