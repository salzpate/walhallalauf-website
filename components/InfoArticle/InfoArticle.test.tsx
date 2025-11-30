import { render, screen } from '@testing-library/react';
import InfoArticle from './InfoArticle';

describe('InfoArticle', () => {
  it('rendert Artikel mit Headline und Content', () => {
    render(
      <InfoArticle headline="Test Headline">
        <p>Test Content</p>
      </InfoArticle>,
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert als article Element', () => {
    render(<InfoArticle headline="Test">Content</InfoArticle>);

    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
