import React from 'react';
import { render, waitFor } from '@testing-library/react';
import DividedList from './DividedList';

describe('DividedList', () => {
  it('renders the card', async() => {
    const { queryByText } = render(<DividedList list={['rating', 'year', 'genre', 'language' ]}/>);
    await waitFor(() => {
      expect(queryByText('rating')).toBeInTheDocument();
      expect(queryByText('year')).toBeInTheDocument();
      expect(queryByText('genre')).toBeInTheDocument();
      expect(queryByText('language')).toBeInTheDocument();
      expect(queryByText('monkey baloons')).not.toBeInTheDocument();
    });
  });
});