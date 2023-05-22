import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import * as mockData from '../api/data.json';
import Carousel from './Carousel';

// Mock the useAPI hook
jest.mock('../api/apiContext', () => ({
  useAPI: jest.fn(() => ({
    data: mockData.titles,
    isLoading: false,
    isError: false,
  })),
}));

describe('Carousel', () => {
  it('renders the carousel component with all titles', async() => {
    const { queryByLabelText } = render(<Router><Carousel type={null} /></Router>);
    await waitFor(() => {
      expect(queryByLabelText(mockData.titles[0].title)).toBeInTheDocument();
      expect(queryByLabelText(mockData.titles[5].title)).toBeInTheDocument();
    });
    });
  it('renders the carousel component with movies', async() => {
    const { queryByLabelText } = render(<Router><Carousel type='movie' /></Router>);
    await waitFor(() => {
      expect(queryByLabelText(mockData.titles[5].title)).toBeInTheDocument();
      expect(queryByLabelText(mockData.titles[0].title)).not.toBeInTheDocument();
    });
  });
  it('renders the carousel component with series', async() => {
    const { queryByLabelText } = render(<Router><Carousel type='series' /></Router>);
    await waitFor(() => {
      expect(queryByLabelText(mockData.titles[0].title)).toBeInTheDocument();
      expect(queryByLabelText(mockData.titles[5].title)).not.toBeInTheDocument();
    });
  });
  it('only show 6 titles in the DOM', async() => {
    const { queryByLabelText } = render(<Router><Carousel type={null} /></Router>);
    await waitFor(() => {
      expect(queryByLabelText(mockData.titles[0].title)).toBeInTheDocument();
      expect(queryByLabelText(mockData.titles[6].title)).not.toBeInTheDocument();
    });
  });
});