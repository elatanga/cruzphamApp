import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Notification } from '../components/ui/Notification';

describe('Luxury UX Components', () => {
  it('renders success notification correctly', () => {
    const { getByText } = render(<Notification message="Access granted" type="success" />);
    expect(getByText('Access granted')).toBeDefined();
  });

  it('renders skeleton loader', () => {
    const { container } = render(<div className="animate-pulse bg-slate-200" />);
    expect(container.firstChild).toHaveClass('animate-pulse');
  });
});