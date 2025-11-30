import { JSX } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { NavMenu } from '@/components/types/Menu/Menu';

function NavBarLink(props: Readonly<NavMenu>): JSX.Element {
  const { href, children, activeMenu, activeMenuName } = props;
  const isActive = activeMenuName && activeMenu && activeMenu === activeMenuName;

  return (
    <Link
      href={href}
      className={cn(
        'relative text-sm font-thin uppercase tracking-widest text-[rgba(23,23,23,1)] transition-all duration-300 ease-in-out hover:text-secondary hover:opacity-75 dark:text-gray-300 dark:hover:text-secondary-dark',
        'before:absolute before:-bottom-2 before:left-0 before:h-0.5 before:w-0 before:bg-secondary before:opacity-0 before:transition-all before:duration-300 before:ease-in-out before:content-[""] hover:before:w-full hover:before:opacity-75 dark:before:bg-secondary-dark',
        isActive && 'text-secondary before:w-full before:opacity-100 dark:text-secondary-dark',
      )}
    >
      {children}
    </Link>
  );
}
export default NavBarLink;
