/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { Url } from '../types/Menu/Menu';

interface ImageButtonLinkProps {
  href: Url;
  headline: ReactNode;
  imgSrc?: string;
}

function ImageButtonLink(props: Readonly<PropsWithChildren<ImageButtonLinkProps>>): JSX.Element {
  const { href, headline, imgSrc, children } = props;

  return (
    <Link
      href={href}
      className="button-link flex h-full items-center rounded-lg border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-200 hover:no-underline dark:border-gray-500 dark:bg-black dark:hover:border-gray-600 dark:hover:bg-gray-500"
      aria-label={`${headline}`}
    >
      {imgSrc && <img className="images-dark mr-4 h-auto w-32 shrink-0 rounded-l-lg object-cover object-center" src={imgSrc} alt="" role="presentation" />}
      <div className="grow">
        <h2 className="title-font pb-1 font-bold text-gray-900 dark:text-gray-200">{headline}</h2>
        <p className="pr-2 text-sm text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </Link>
  );
}

export default ImageButtonLink;
