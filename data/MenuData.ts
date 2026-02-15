import { AppMenu } from '@/components/types/Menu/Menu';

export const MenuData: AppMenu = {
  main: [
    {
      id: 'Ausschreibung',
      children: 'Ausschreibung',
      href: '/ausschreibung/',
      activeMenuName: 'ausschreibung',
    },
    {
      id: 'Strecken',
      children: 'Strecken',
      href: '/strecken/',
      activeMenuName: 'strecken',
      subMenue: [
        {
          id: '10km',
          children: '10 km Lauf',
          href: '/strecken/#lauf10',
        },
        {
          id: '5km',
          children: '5 km Lauf',
          href: '/strecken/#lauf5',
        },
        {
          id: 'waldlauf',
          children: 'Waldlauf und Walken',
          href: '/strecken/#waldlauf',
        },
        {
          id: 'kinder-1000',
          children: 'Kinderläufe',
          href: '/strecken/#kinder-1000',
        },
      ],
    },
    {
      id: 'Informationen',
      children: 'Informationen',
      href: '/informationen/',
      activeMenuName: 'informationen',
      subMenue: [
        {
          id: 'Benefiz-footer',
          children: 'Benefiz',
          href: '/benefiz/',
        },

        {
          id: 'zeiten',
          children: 'Startzeiten und -richtung',
          href: '/informationen/#sectionzeiten',
        },
        {
          id: 'parken',
          children: 'Anreise und Parken',
          href: '/informationen/#parken',
        },
        {
          id: 'startnummernausgabe',
          children: 'Nachmeldung / Ummeldung / Startunterlagen',
          href: '/informationen/#startnummernausgabe',
        },
        {
          id: 'kinder',
          children: 'Kinder',
          href: '/informationen/#kinder',
        },
        {
          id: 'hunde',
          children: 'Hunde',
          href: '/informationen/#hunde',
        },
        {
          id: 'ergebnislisten',
          children: 'Ergebnislisten',
          href: '/informationen/#ergebnislisten',
        },
        {
          id: 'sponsoren',
          children: 'Sponsoren',
          href: '/informationen/#sponsoren',
        },
      ],
    },
    {
      id: 'Benefiz',
      children: 'Benefiz',
      href: '/benefiz/',
      activeMenuName: 'benefiz',
      hideFooter: true,
    },
    {
      id: 'Kontakt',
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
      id: 'Datenschutz',
      children: 'Datenschutz',
      href: '/datenschutz/',
      activeMenuName: 'datenschutz',
    },
    {
      id: 'Impressum',
      children: 'Impressum',
      href: '/impressum/',
      activeMenuName: 'impressum',
    },
  ],
};
