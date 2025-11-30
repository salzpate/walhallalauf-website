import { render, screen } from '@testing-library/react';
import HeadlineTextElement from './HeadlineTextElement';

describe('HeadlineTextElement', () => {
  it('rendert Headline und Text', () => {
    render(
      <HeadlineTextElement headline="Test Headline">
        <p>Test Content</p>
      </HeadlineTextElement>,
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('rendert Headline als h3', () => {
    render(<HeadlineTextElement headline="Test">Content</HeadlineTextElement>);

    const headline = screen.getByRole('heading', { level: 3 });
    expect(headline).toBeInTheDocument();
    expect(headline).toHaveTextContent('Test');
  });
});
