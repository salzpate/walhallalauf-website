import { AppMenu } from '@/components/types/Menu/Menu';

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
    /*  {
      children: 'Newsletter',
      href: 'https://85d0cc18.sibforms.com/serve/MUIFAH_G1tZKmiVOaHH3jZu9MQujy0G_G7DECYJNyBhb8SYY0YmEryCX9zyGxEmiMB4zU0fD2xcnN0ZDKf_Bi27_U_MWXXGb6R9K9uJYnG4sEFe81Ynp-oxWvx2F4tLOEeWBjtPLzoz5Yr5viRfg1Dr-RYgKdX9wPFYKyfSvyU7H9PsTFIIwzDlgR1M5hJnxb7xYCoVgovmoHghE',
      target: '_blank',
    },*/
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
