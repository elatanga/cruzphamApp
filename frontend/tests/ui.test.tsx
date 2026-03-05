import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../components/ui/Button';

describe('UI Components', () => {
  it('renders button correctly', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeDefined();
  });

  it('shows loading state', () => {
    const { container } = render(<Button isLoading>Loading</Button>);
    expect(container.querySelector('.animate-spin')).toBeDefined();
  });
});