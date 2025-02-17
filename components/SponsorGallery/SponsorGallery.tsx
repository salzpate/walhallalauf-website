/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren } from 'react';

interface SponsorGalleryItems {
  imageUrl: string;
  link: string;
  name: string;
  id: string;
};

interface SponsorGalleryGroup {
  id: string;
  name: string;
  items: SponsorGalleryItems[];
};

interface SponsorGalleryProps {
  id?: string;
  groups: SponsorGalleryGroup[];
};

function SponsorGallery(props: PropsWithChildren<SponsorGalleryProps>): JSX.Element {
  const { id, groups } = props;

  return (
    <div id={id}>
      {groups.map(group => {
        return (
          <div key={group.id}>
            <h3 className="mt-6 uppercase tracking-tight font-medium text-lg sm:text-xl lg:text-1xl">{group.name}</h3>
            <ul key={group.id} className="my-6 sm:my-8 sm:columns-2 md:columns-4 lg:columns-5 block gap-x-4">
              {group.items.map(item => {
                return (
                  <li key={item.id} className="mb-4">
                    <a href={item.link} target="_blank" rel="noreferrer" className="hover:opacity-60">
                      <img src={item.imageUrl} alt={item.name} className="pb-4 images-dark" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SponsorGallery;
export type { SponsorGalleryItems, SponsorGalleryGroup, SponsorGalleryProps };