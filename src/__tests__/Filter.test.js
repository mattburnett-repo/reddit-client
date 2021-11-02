import React from 'react';
import { render, screen } from '@testing-library/react';

import Filter from '../components/filter/Filter.js';

it('returns filter tag text', () => {
    render(<Filter />);
    expect(screen.getByText('filter tag')).toBeInTheDocument();
});
