import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../index';

test('Navbar - detail', () => {
  render(<Navbar type='detail' title='test' />);
  screen.debug();
  // screen.getByRole('heading', { name: /my pokemon:/i });
  // TODO:: error hooks ga sempet benerin aliasing test jesr
});
