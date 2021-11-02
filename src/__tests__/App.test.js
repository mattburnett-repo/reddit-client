import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

it('includes a logo image', () => {
  render(<App />);
  expect(screen.getByText('logo image')).toBeInTheDocument();
});

it('includes a search tag', () => {
  render(<App />);
  expect(screen.getByText('search tag')).toBeInTheDocument();
});

it('includes a filter tag', () => {
  render(<App />);
  expect(screen.getByText('filter tag')).toBeInTheDocument();
});

it('includes an items tag', () => {
  render(<App />);
  expect(screen.getByText('items tag')).toBeInTheDocument();
});
