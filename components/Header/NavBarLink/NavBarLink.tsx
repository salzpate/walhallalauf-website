import { JSX } from 'react';

import Link from 'next/link';

import { NavMenu } from '@/components/types/Menu/Menu';

import styles from './NavBarLink.module.css';

function NavBarLink(props: Readonly<NavMenu>): JSX.Element {
  const { href, children, activeMenu, activeMenuName } = props;
  return (
    <Link href={href} legacyBehavior>
      <a className={activeMenuName && activeMenu && activeMenu === activeMenuName ? styles.activated : styles.navbarlink}>{children}</a>
    </Link>
  );
}
export default NavBarLink;
