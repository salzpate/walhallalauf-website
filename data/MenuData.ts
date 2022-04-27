import { AppMenu } from '@/components/commons/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      children: 'Ausschreibung',
      href: '/ausschreibung/',
      activeMenuName: 'ausschreibung',
    },
    {
      children: 'Strecken',
      href: '/strecken/',
      activeMenuName: 'strecken',
    },
    {
      children: 'Informationen',
      href: '/informationen/',
      activeMenuName: 'informationen',
    },
    {
      children: 'Benefiz',
      href: '/benefiz/',
      activeMenuName: 'benefiz',
    },
    {
      children: 'Kontakt',
      href: '/kontakt/',
      activeMenuName: 'kontakt',
    },
  ],
  footer: [
    {
      children: 'Datenschutz',
      href: '/datenschutz/',
      activeMenuName: 'datenschutz',
    },
    {
      children: 'Impressum',
      href: '/impressum/',
      activeMenuName: 'impressum',
    },
  ],
};
