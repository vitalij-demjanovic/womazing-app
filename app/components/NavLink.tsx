'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

type NavLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavLink = ({ href, className, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      {...props}
      href={href}
      className={clsx(
        'duration-300 ease-in-out hover:text-primary hover:underline hover:decoration-primary hover:decoration-1 hover:underline-offset-8',
        className,
        isActive &&
          'text-primary underline decoration-primary decoration-1 underline-offset-8'
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
