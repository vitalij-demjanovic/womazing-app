'use client';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import clsx from 'clsx';

export default function TabsCategories() {
  const [isActive, setActive] = useState('all');

  const handleActive = (category: string) => {
    setActive(category);
  };

  return (
    <div className='flex'>
      <div
        onClick={() => handleActive('all')}
        className={clsx(
          'hover:bg-black mr-3 cursor-pointer border px-16 py-4 duration-300 ease-in-out hover:text-white',
          { 'bg-black text-white': isActive == 'all' }
        )}
      >
        All
      </div>
      <div
        onClick={() => handleActive('coats')}
        className={clsx(
          'hover:bg-black mr-3 cursor-pointer border px-16 py-4 duration-300 ease-in-out hover:text-white',
          { 'bg-black text-white': isActive == 'coats' }
        )}
      >
        Coats
      </div>
      <div
        onClick={() => handleActive('sweatshirts')}
        className={clsx(
          'hover:bg-black mr-3 cursor-pointer border px-16 py-4 duration-300 ease-in-out hover:text-white',
          { 'bg-black text-white': isActive == 'sweatshirts' }
        )}
      >
        Sweatshirts
      </div>
      <div
        onClick={() => handleActive('cardigans')}
        className={clsx(
          'hover:bg-black mr-3 cursor-pointer border px-16 py-4 duration-300 ease-in-out hover:text-white',
          { 'bg-black text-white': isActive == 'cardigans' }
        )}
      >
        Cardigans
      </div>
      <div
        onClick={() => handleActive('hoodies')}
        className={clsx(
          'hover:bg-black cursor-pointer border px-16 py-4 duration-300 ease-in-out hover:text-white',
          { 'bg-black text-white': isActive == 'hoodies' }
        )}
      >
        Hoodies
      </div>
    </div>
  );
}
