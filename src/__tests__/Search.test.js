import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../components/search/Search.js';

it('returns search tag text', () => {
    render(<Search />);
    expect(screen.getByText('search tag')).toBeInTheDocument();
});
