import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Loading from '../index';

test('Loading useless test', () => {
  const {screen, getByText} = render(<Loading  />);

  expect(getByText('Loading...')).toHaveTextContent('Loading...');
});
