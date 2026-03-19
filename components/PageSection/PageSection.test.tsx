import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('@salzpate/react-ui', () => ({
  PageSection: ({ id, headline, children }: { id: string; headline: string; children: React.ReactNode }) => (
    <section id={id}>
      {headline && <h2>{headline}</h2>}
      {children}
    </section>
  ),
}));

import PageSection from './PageSection';

describe('PageSection', () => {
  it('rendert Section mit Headline', () => {
    render(
      <PageSection headline="Test Headline" id="test">
        <p>Test Content</p>
      </PageSection>,
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('hat korrekte ID', () => {
    const { container } = render(
      <PageSection headline="Test" id="test-id">
        Content
      </PageSection>,
    );

    const section = container.querySelector('#test-id');
    expect(section).toBeInTheDocument();
  });

  it('rendert Content ohne Headline', () => {
    render(
      <PageSection id="test" headline="">
        Content
      </PageSection>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
