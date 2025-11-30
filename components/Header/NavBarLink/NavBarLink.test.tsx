import { render, screen } from '@testing-library/react';
import NavBarLink from './NavBarLink';

describe('NavBarLink', () => {
  it('rendert den Link mit Text', () => {
    render(
      <NavBarLink href="/test" activeMenuName="test">
        Test Link
      </NavBarLink>,
    );

    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('zeigt aktiven Zustand wenn activeMenu übereinstimmt', () => {
    render(
      <NavBarLink href="/test" activeMenuName="test" activeMenu="test">
        Test Link
      </NavBarLink>,
    );

    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toHaveClass('text-secondary');
  });

  it('zeigt inaktiven Zustand wenn activeMenu nicht übereinstimmt', () => {
    render(
      <NavBarLink href="/test" activeMenuName="test" activeMenu="other">
        Test Link
      </NavBarLink>,
    );

    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).not.toHaveClass('text-secondary');
  });

  it('zeigt inaktiven Zustand wenn activeMenu undefined ist', () => {
    render(
      <NavBarLink href="/test" activeMenuName="test">
        Test Link
      </NavBarLink>,
    );

    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).not.toHaveClass('text-secondary');
  });
});
