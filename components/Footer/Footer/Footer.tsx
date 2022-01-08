import { NavMenuItem } from '@/components/commons/Menu/Menu';
import FooterLink from '@/components/Footer/FooterLink';
import { ReactNode } from 'react';

interface FooterProps {
  text: ReactNode;
  menuItems: NavMenuItem[];
}

function Footer(props: FooterProps): JSX.Element {
  const { text, menuItems } = props;
  return (
    <footer className="bg-gray-800 w-full py-6 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-col sm:flex-row md:flex-wrap">
          <div className="flex items-center order-2 lg:order-1">
            <div className="text-gray-400 font-thin my-8 text-xs text-center md:text-left md:text-sm md:my-0">{text}</div>
          </div>
          <div className="flex order-1 flex-col md:grow md:items-stretch md:justify-end md:flex-row">
            <span className="text-center md:text-left">
              <a
                href="https://de-de.facebook.com/walhallalauf/"
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center justify-center px-2 py-2 text-sm tracking-widest rounded-md text-gray-400 shadow-sm transition ease-in-out duration-150 my-2 sm:my-0 hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-600 dark:focus:bg-gray-700"
              >
                <svg className="block h-5 w-5" viewBox="0 0 77.809997 156.31039" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m64.13 24.850402c-9.65 0-12.44 4.28-12.44 13.72v15.66h25.739997l-2.58 25.299997h-23.149997v76.780001h-30.89v-76.780001h-20.81v-25.299997h20.81v-15.23c0-25.52 10.29-38.99999996 39-38.99999996a146.17 146.17 0 0 1 17.999997 1.06999996v23.81z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </span>
            {menuItems.map((item, i) => {
              return (
                <span key={'footer' + i} className="text-center md:text-left">
                  {<span className="text-gray-600 mx-1 hidden md:inline">|</span>}
                  <FooterLink href={item.href}>{item.children}</FooterLink>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
