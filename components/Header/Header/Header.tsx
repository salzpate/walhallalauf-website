'use client';

import { JSX, useState, useRef } from 'react';
import Link from 'next/link';

import { type ActiveMenuItem, type NavMenuItem } from '@/components/types/Menu/Menu';
import NavBarLink from '@/components/Header/NavBarLink';
import NavLink from '@/components/Header/NavLink';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { cn } from '@/lib/cn';

interface HeaderProps extends ActiveMenuItem {
  navMenuItems: NavMenuItem[];
}

function Header(props: Readonly<HeaderProps>): JSX.Element {
  const [isOn, setIsOn] = useState(false);
  const { activeMenu, navMenuItems } = props;
  const menuRef = useRef<HTMLElement>(null);

  // Custom Hooks für Fokus-Management und Body-Scroll-Lock
  useFocusTrap(isOn, menuRef, () => setIsOn(false));
  useBodyScrollLock(isOn);

  return (
    <>
      <header className="fixed z-10 w-full bg-white dark:bg-gray-900" role="banner">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
          <div className="flex h-14 items-center justify-between sm:h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <Link
                  href="/"
                  className="block h-[34px] w-[110px] bg-[url('/assets/images/logo-7ddb1f8f39.png')] bg-size-[110px_34px] sm:h-12 sm:w-[155px] sm:bg-size-[155px_48px] dark:bg-[url('/assets/images/logo-dark-7ddb1f8f39.png')]"
                  aria-label="Zur Startseite"
                >
                  &nbsp;
                </Link>
              </div>
            </div>
            <div className="hidden md:inline-flex md:items-center md:justify-center md:space-x-6">
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
            <div className="-mr-2 md:hidden">
              <button
                className="text-header-color inline-flex cursor-pointer items-center justify-center rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-gray-100 hover:opacity-75 dark:text-white/87"
                onClick={() => setIsOn(true)}
                aria-label={isOn ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={isOn}
                aria-controls="mobile-menu"
              >
                {!isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                {isOn && (
                  <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div role="presentation" aria-hidden="true" className={cn('fixed inset-0 z-10 transition-opacity', { 'inset-0 hidden': !isOn })} onClick={() => setIsOn(false)}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      <aside
        ref={menuRef}
        id="mobile-menu"
        className={cn('fixed top-0 left-0 z-30 h-full w-70 transform overflow-auto bg-gray-100 shadow-xl transition-all duration-300 ease-in-out dark:bg-gray-900', { 'translate-x-0': isOn }, { '-translate-x-full': !isOn })}
        aria-label="Mobile Navigation"
        aria-hidden={!isOn}
      >
        <span className="flex w-full items-center p-4">
          <Link href="/" className="mx-auto block h-12 w-[155px] bg-[url('/assets/images/logo-7ddb1f8f39.png')] bg-size-[155px_48px] dark:bg-[url('/assets/images/logo-dark-7ddb1f8f39.png')]" aria-label="Zur Startseite">
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
