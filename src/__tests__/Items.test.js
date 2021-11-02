import React from 'react';
import { render, screen } from '@testing-library/react';

import Items from '../components/items/Items.js';

it('returns items tag text', () => {
    render(<Items />);
    expect(screen.getByText('items tag')).toBeInTheDocument();
});
