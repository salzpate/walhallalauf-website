/* eslint-disable @next/next/no-img-element */
import styles from './ImageButtonLink.module.css';
import { JSX, PropsWithChildren, ReactNode } from 'react';
import { UrlObject } from 'url';
import Link from 'next/link';

export type Url = string | UrlObject;

type ImageButtonLinkProps = {
  href: Url;
  headline: ReactNode;
  imgSrc?: string;
};

function ImageButtonLink(props: PropsWithChildren<ImageButtonLinkProps>): JSX.Element {
  const { href, headline, imgSrc, children } = props;

  return (
    <Link href={href} legacyBehavior>
      <a className={styles.link + ' button-link'}>
        {imgSrc && <img className="w-32 h-auto object-cover object-center shrink-0 mr-4 rounded-l-lg images-dark" src={imgSrc} alt={headline as string} />}
        <div className="grow">
          <h2 className="text-gray-900 title-font font-bold pb-1 dark:text-gray-200">{headline}</h2>
          <p className="text-gray-500 text-sm dark:text-gray-400 pr-2">{children}</p>
        </div>
      </a>
    </Link>
  );
}

export default ImageButtonLink;
