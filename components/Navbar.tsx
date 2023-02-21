import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-30 bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-between max-w-[1350px] mx-auto'>
        <div className='flex items-center justify-center'>
          <Link href='/'>
            <p className='relative cursor-pointer font-bold text-lg'>
              Next Commerce
            </p>
          </Link>
        </div>

        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex capitalize'>
          <a className='headerLink'>phones</a>
          <a className='headerLink'>explore</a>
          <a className='headerLink'>deals</a>
          <a className='headerLink'>contact</a>
        </div>

        <div className='flex items-center justify-center gap-x-4'>
          <MagnifyingGlassIcon className='headerIcon' />
          <Link href='/'>
            <div className='relative cursor-pointer'>
              <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-violet-500 text-[10px] text-white'>
                5
              </span>
              <ShoppingBagIcon className='headerIcon' />
            </div>
          </Link>

          <UserIcon className='headerIcon' />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
