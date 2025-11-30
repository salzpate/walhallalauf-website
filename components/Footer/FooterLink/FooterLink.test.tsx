import { render, screen } from '@testing-library/react';
import FooterLink from './FooterLink';

describe('FooterLink', () => {
  it('rendert Link mit Text', () => {
    render(<FooterLink href="/test">Test Link</FooterLink>);

    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('hat korrekte Styling-Klassen', () => {
    render(<FooterLink href="/test">Test Link</FooterLink>);

    const link = screen.getByRole('link');
    expect(link).toHaveClass('text-gray-400');
  });
});
