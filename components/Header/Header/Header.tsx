'use client';

import { JSX, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { type ActiveMenuItem, type NavMenuItem } from '@/components/types/Menu/Menu';
import NavBarLink from '@/components/Header/NavBarLink';
import NavLink from '@/components/Header/NavLink';

import styles from './Header.module.css';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: Readonly<HeaderProps>): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;

  return (
    <>
      <header className="fixed z-10 w-full bg-white dark:bg-gray-900">
        <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between sm:h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <Link href="/" className={styles.headlogo} tabIndex={-1}>
                  &nbsp;
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="inline-flex items-center justify-center space-x-6">
                {navMenuItems.map((item, i) => {
                  return (
                    <NavBarLink key={i} href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                      {item.children}
                    </NavBarLink>
                  );
                })}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="text-header-color inline-flex items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:opacity-75 dark:text-white/87" onClick={() => setIsOn(true)}>
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div
        aria-hidden="true"
        className={cn('fixed inset-0 z-10 transition-opacity', { hidden: !isOn })}
        onClick={() => setIsOn(false)}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (event.key === 'Enter' || event.key === 'Escape') {
            setIsOn(false);
          }
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <aside className={cn('fixed top-0 left-0 z-30 h-full w-64 transform overflow-auto bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900', { 'translate-x-0': isOn }, { '-translate-x-full': !isOn })}>
        <span className="flex w-full items-center p-4">
          <Link href="/" className={styles.headlogoSide} tabIndex={-1}>
            &nbsp;
          </Link>
        </span>
        {navMenuItems.map((item, i) => {
          return (
            <span key={i} className="mb-1 flex px-2">
              <NavLink href={item.href} activeMenuName={item.activeMenuName} activeMenu={activeMenu}>
                {item.children}
              </NavLink>
            </span>
          );
        })}
      </aside>
    </>
  );
}
export default Header;
