import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { HomePage } from '../components/pages/HomePage';

describe('Public Pages', () => {
  it('renders homepage correctly', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Elite TikTok Creator Network')).toBeDefined();
  });

  it('contains footer signature', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Created by EL CruzPham')).toBeDefined();
  });
});