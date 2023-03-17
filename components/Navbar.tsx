import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FireIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  QueueListIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Search from './Search';

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  // navbar scroll changeBackground function
  const fixedNav = () => {
    if (window.scrollY >= 66) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    fixedNav();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', fixedNav);
  });

  return (
    <>
      <header
        className={`${
          navScroll ? 'sticky animate-nav-slide' : 'relative'
        } top-0 right-0 left-0 z-30 bg-[#f7f7f7] p-3 shadow-md`}
      >
        <div
          className={`flex items-center justify-between max-w-[1250px] mx-auto`}
        >
          <div className='flex items-center justify-center'>
            <Link href='/'>
              <p className='relative cursor-pointer font-bold text-lg text-sky-900'>
                Commerce
              </p>
            </Link>
          </div>

          <div className='hidden md:block '>
            <Search />
          </div>

          <div className='flex items-center justify-center gap-x-4'>
            {/* <MagnifyingGlassIcon className='headerIcon md:hidden' /> */}
            <Link href='/'>
              <div className='relative cursor-pointer'>
                <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-sky-900 text-[10px] text-white'>
                  5
                </span>
                <ShoppingBagIcon className='headerIcon' />
              </div>
            </Link>

            <UserIcon className='headerIcon h-7 w-7' />
          </div>
        </div>
        <div className='md:hidden mt-2'>
          <Search />
        </div>
      </header>
      <div className='scroll-smooth scrollbar-hide relative overflow-x-auto flex justify-start md:justify-center mx-auto bg-sky-900 space-x-4 text-sm capitalize p-2 border-b border-gray-300 whitespace-nowrap'>
        <a href='#' className='headerLink flex items-center justify-center'>
          <FireIcon className='h-4' />
          new deals
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          <QueueListIcon className='h-4' /> wish list
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          <HeartIcon className='h-4' /> favourites
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          refurbished
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          top picks
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          popular
        </a>
        <a href='#' className='headerLink flex items-center justify-center'>
          help & contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
