import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import * as mockData from '../api/data.json';
import Program from './Program';

// Mock the useAPI hook
jest.mock('../api/apiContext', () => ({
  useAPI: jest.fn(() => ({
    data: mockData.titles,
    isLoading: false,
    isError: false,
  })),
}));

describe('Program', () => {
  it('renders the program', async() => {
    const { queryByText } = render(<Router><Program id={mockData.titles[0].id} /></Router>);
    await waitFor(() => {
      expect(queryByText(mockData.titles[0].title)).toBeInTheDocument();
      expect(queryByText(mockData.titles[1].title)).not.toBeInTheDocument();
    });
  });
  it('renders the program description', async() => {
    const { queryByText } = render(<Router><Program id={mockData.titles[0].id} /></Router>);
    await waitFor(() => {
      expect(queryByText(mockData.titles[0].description)).toBeInTheDocument();
      expect(queryByText(mockData.titles[1].description)).not.toBeInTheDocument();
    });
  });
  it('renders the program description', async() => {
    const { queryByText } = render(<Router><Program id={mockData.titles[0].id} /></Router>);
    await waitFor(() => {
      expect(queryByText(mockData.titles[0].rating)).toBeInTheDocument();
      expect(queryByText(mockData.titles[0].year)).toBeInTheDocument();
      expect(queryByText(mockData.titles[0].genre)).toBeInTheDocument();
      expect(queryByText(mockData.titles[0].language)).toBeInTheDocument();
    });
  });
});