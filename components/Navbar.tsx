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
        } top-0 right-0 left-0 z-30 bg-white p-4 border-b border-gray-300`}
      >
        <div
          className={`flex items-center justify-between max-w-[1250px] mx-auto`}
        >
          <div className='flex items-center justify-center'>
            <Link href='/'>
              <p className='relative cursor-pointer font-bold text-lg text-slate-800'>
                Next Commerce
              </p>
            </Link>
          </div>

          {/* <div className='hidden flex-1 items-center justify-center space-x-8 md:flex capitalize'>
            <a className='headerLink'>phones</a>
            <a className='headerLink'>explore</a>
            <a className='headerLink'>deals</a>
            <a className='headerLink'>contact</a>
          </div> */}

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
      <div className='scroll-smooth scrollbar-hide relative overflow-x-auto flex justify-start md:justify-center max-w-[1250px] mx-auto bg-white space-x-4 text-sm capitalize p-2 border-b border-gray-300 whitespace-nowrap'>
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
      </div>
    </>
  );
};

export default Navbar;
