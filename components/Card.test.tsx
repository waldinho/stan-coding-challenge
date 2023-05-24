import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import * as mockData from '../api/data.json';
import Card from './Card';

jest.mock('../api/apiContext', () => ({
  useAPI: jest.fn(() => ({
    data: mockData.titles,
    isLoading: false,
    isError: false,
  })),
}));

describe('Card', () => {
  it('renders the card', async() => {
    const { queryByLabelText } = render(
    <Router>
      <Card 
        item={mockData.titles[0]} 
        index={0}
        hoverIndex={0} 
        firstItemIndex={0} 
        isloading={false} 
        setHoverIndex={() => {}}
      />
    </Router>);
    await waitFor(() => {
      expect(queryByLabelText(mockData.titles[0].title)).toBeInTheDocument();
      expect(queryByLabelText(mockData.titles[1].title)).not.toBeInTheDocument();
    });
  });
});