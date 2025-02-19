/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren } from 'react';

interface SponsorGalleryItems {
  imageUrl: string;
  link: string;
  name: string;
  id: string;
}

interface SponsorGalleryGroup {
  id: string;
  name: string;
  items: SponsorGalleryItems[];
}

interface SponsorGalleryProps {
  id?: string;
  groups: SponsorGalleryGroup[];
}

function SponsorGallery(props: PropsWithChildren<SponsorGalleryProps>): JSX.Element {
  const { id, groups } = props;

  return (
    <div id={id}>
      {groups.map(group => {
        return (
          <div key={group.id}>
            <h3 className="lg:text-1xl mt-6 text-lg font-medium tracking-tight uppercase sm:text-xl">{group.name}</h3>
            <ul key={group.id} className="my-6 block gap-x-4 sm:my-8 sm:columns-2 md:columns-4 lg:columns-5">
              {group.items.map(item => {
                return (
                  <li key={item.id} className="mb-4">
                    <a href={item.link} target="_blank" rel="noreferrer" className="hover:opacity-60">
                      <img src={item.imageUrl} alt={item.name} className="images-dark pb-4" />
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
