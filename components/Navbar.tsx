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
                Commerce
              </p>
            </Link>
          </div>

          <div className='hidden md:block relative text-gray-600'>
            <input
              className='border-2 border-gray-300 bg-white h-10 px-5 w-[430px] pr-8 rounded-lg text-sm focus:outline-none'
              type='search'
              name='search'
              placeholder='Search'
            />
            <button type='submit' className='absolute right-0 top-0 mt-3 mr-4'>
              <svg
                className='text-gray-600 h-4 w-4 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                id='Capa_1'
                x='0px'
                y='0px'
                viewBox='0 0 56.966 56.966'
                width='512px'
                height='512px'
              >
                <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
              </svg>
            </button>
          </div>

          <div className='flex items-center justify-center gap-x-4'>
            <MagnifyingGlassIcon className='headerIcon md:hidden' />
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
      <div className='scroll-smooth scrollbar-hide relative overflow-x-auto flex justify-start md:justify-center mx-auto bg-[#f7f7f7] space-x-4 text-sm capitalize p-2 border-b border-gray-300 whitespace-nowrap'>
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
