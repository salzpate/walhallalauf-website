/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren } from 'react';

export type SponsorGalleryItems = {
  imageUrl: string;
  link: string;
  name: string;
};

export type SponsorGalleryProps = {
  id?: string;
  items: SponsorGalleryItems[];
};

function SponsorGallery(props: PropsWithChildren<SponsorGalleryProps>): JSX.Element {
  const { id, items } = props;

  return (
    <div id={id}>
      <ul className="my-6 sm:my-8 sm:columns-2 md:columns-4 lg:columns-5 block gap-x-4">
        {items.map((item, index) => {
          return (
            <li key={index} className="mb-4">
              <a href={item.link} target="_blank" rel="noreferrer" className="hover:opacity-60">
                <img src={item.imageUrl} alt={item.name} className="pb-4 images-dark" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SponsorGallery;
