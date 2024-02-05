import Image from 'next/image';
import NavLink from '@/app/components/NavLink';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className='container flex items-center justify-between py-12'>
        <div>
          <Link href={'/'}>
            <Image
              src='/images/womazing-logo.svg'
              alt='logo womazing'
              width={103}
              height={15}
            />
          </Link>
        </div>
        <nav>
          <ul className='flex items-center'>
            <li className='mr-11'>
              <NavLink href={'/'}>Home</NavLink>
            </li>
            <li className='mr-11'>
              <NavLink href={'/shop'}>Shop</NavLink>
            </li>
            <li className='mr-11'>
              <NavLink href={'/brand'}>The Brand</NavLink>
            </li>
            <li className='mr-11'>
              <NavLink href={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Link href={'/cart'}>
            <ShoppingBagIcon className='h-[24px] w-[24px] duration-300 ease-in-out hover:text-primary' />
          </Link>
        </div>
      </div>
    </header>
  );
}
