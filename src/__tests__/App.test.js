// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Test App/Dev Setup', () => {
  it('includes a logo', () => {
    render(<App />);
    expect(screen.getByAltText('logo')).toBeInTheDocument(); // getByAltText
  });
  it('includes a search tag', () => { // import next three tests
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
});

