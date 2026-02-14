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
      className="button-link flex h-full items-center rounded-lg border border-gray-200 bg-white shadow-lg backdrop-blur-xs transition-all duration-200 hover:scale-105 hover:border-gray-300 hover:no-underline hover:backdrop-blur-sm supports-backdrop-filter:bg-gray-100/30 dark:border-gray-500 dark:hover:border-gray-600 dark:supports-backdrop-filter:bg-gray-700/30"
      aria-label={headline as string}
    >
      {imgSrc && <img className="images-dark mr-4 h-auto w-32 shrink-0 rounded-l-lg object-cover object-center opacity-75" src={imgSrc} alt="" role="presentation" />}
      <div className="grow">
        <h2 className="title-font pb-1 font-bold text-gray-900 dark:text-gray-200">{headline}</h2>
        <p className="pr-2 text-sm text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </Link>
  );
}

export default ImageButtonLink;
