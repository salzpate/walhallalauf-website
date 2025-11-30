import { render, screen } from '@testing-library/react';
import SponsorGallery from './SponsorGallery';

describe('SponsorGallery', () => {
  const mockGroups = [
    {
      id: 'group1',
      name: 'Hauptsponsoren',
      items: [
        { id: '1', name: 'Sponsor 1', link: 'https://sponsor1.com', imageUrl: '/sponsor1.jpg' },
        { id: '2', name: 'Sponsor 2', link: 'https://sponsor2.com', imageUrl: '/sponsor2.jpg' },
      ],
    },
  ];

  it('rendert alle Sponsoren', () => {
    render(<SponsorGallery groups={mockGroups} />);

    expect(screen.getByAltText('Sponsor 1')).toBeInTheDocument();
    expect(screen.getByAltText('Sponsor 2')).toBeInTheDocument();
  });

  it('rendert Gruppen-Headline', () => {
    render(<SponsorGallery groups={mockGroups} />);

    expect(screen.getByText('Hauptsponsoren')).toBeInTheDocument();
  });

  it('rendert Sponsor-Links mit korrekten URLs', () => {
    render(<SponsorGallery groups={mockGroups} />);

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://sponsor1.com');
    expect(links[1]).toHaveAttribute('href', 'https://sponsor2.com');
  });

  it('öffnet Links in neuem Tab', () => {
    render(<SponsorGallery groups={mockGroups} />);

    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('rendert nichts wenn keine Gruppen vorhanden sind', () => {
    const { container } = render(<SponsorGallery groups={[]} />);
    const div = container.firstChild;
    expect(div).toBeEmptyDOMElement();
  });
});
