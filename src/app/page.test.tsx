import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';

import Page from './page';

describe('<Page />', () => {
  test('Page', () => {
    render(<Page />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Home' }),
    ).toBeDefined();
  });
  it('renders button', () => {
    render(<Page />);
    const button = screen.getByRole('button', { name: 'I am a button' });

    expect(button).toBeInTheDocument();
  });
});
