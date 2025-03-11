import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithUser } from '@/utils/tests/renderWithUser';

import { Counter } from './counter';

describe('<Counter />', () => {
  it('should render counter in its initial state', () => {
    render(<Counter />);
    const counterValue = screen.getByText('Current count 0');
    expect(counterValue).toBeInTheDocument();
  });

  it('should increase the counter when the button is clicked', async () => {
    const { user } = renderWithUser(<Counter />);
    const addButton = screen.getByRole('button', { name: /add/i });
    await user.click(addButton);
    const counterValue = screen.getByText(/current count 1/i);
    expect(counterValue).toBeInTheDocument();
  });
});
