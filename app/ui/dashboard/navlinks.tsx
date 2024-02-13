'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  TrophyIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Teams', href: '/dashboard/teams', icon: UserGroupIcon },
  { name: 'Tournaments', href: '/dashboard/tournaments', icon: TrophyIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-rose-100 hover:text-rose-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-rose-100 text-rose-400': pathname === link.href,
              },
            )}
          >
            <link.icon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
