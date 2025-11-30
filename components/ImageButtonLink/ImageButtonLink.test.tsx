import { render, screen } from '@testing-library/react';
import ImageButtonLink from './ImageButtonLink';

describe('ImageButtonLink', () => {
  it('rendert Link mit Headline und Text', () => {
    render(
      <ImageButtonLink href="/test" headline="Test Headline">
        Test Content
      </ImageButtonLink>,
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert Bild wenn imgSrc vorhanden ist', () => {
    render(
      <ImageButtonLink href="/test" headline="Test" imgSrc="/test.jpg">
        Content
      </ImageButtonLink>,
    );

    const img = screen.getByRole('presentation');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('rendert kein Bild wenn imgSrc nicht vorhanden ist', () => {
    render(
      <ImageButtonLink href="/test" headline="Test">
        Content
      </ImageButtonLink>,
    );

    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('hat korrektes aria-label', () => {
    render(
      <ImageButtonLink href="/test" headline="Test Headline">
        Content
      </ImageButtonLink>,
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('aria-label', 'Test Headline');
  });
});
