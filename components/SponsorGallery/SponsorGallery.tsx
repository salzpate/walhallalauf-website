/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren } from 'react';

export type SponsorGalleryItems = {
  imageUrl: string;
  link: string;
  name: string;
  id: string;
};

export type SponsorGalleryGroup = {
  id: string;
  name: string;
  items: SponsorGalleryItems[];
};

export type SponsorGalleryProps = {
  id?: string;
  groups: SponsorGalleryGroup[];
};

function SponsorGallery(props: PropsWithChildren<SponsorGalleryProps>): JSX.Element {
  const { id, groups } = props;

  return (
    <div id={id}>
      {groups.map(group => {
        return (
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
        );
      })}
    </div>
  );
}
export default SponsorGallery;
