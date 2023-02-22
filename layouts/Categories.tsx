import Category from '@/components/Category';
import {
  ArchiveBoxIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon,
  PlayCircleIcon,
  PuzzlePieceIcon,
  RadioIcon,
  TvIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import React, { useRef } from 'react';

const Categories = () => {
  const carousel = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carousel.current) {
      carousel.current.scrollLeft -= 400;
    }
  };
  const scrollRight = () => {
    if (carousel.current) {
      carousel.current.scrollLeft += 400;
    }
  };

  return (
    <>
      <div className='relative mx-auto max-w-[1250px] mt-8'>
        <div className='absolute right-0 top-5 z-30'>
          <button
            onClick={scrollLeft}
            className='p-2 m-2 rounded-full bg-[#f7f9fa]'
          >
            <ChevronLeftIcon className='h-5 w-5' />
          </button>
          <button
            onClick={scrollRight}
            className='p-2 m-2 rounded-full bg-[#f7f9fa]'
          >
            <ChevronRightIcon className='h-5 w-5' />
          </button>
        </div>

        <div
          ref={carousel}
          className='carousel scroll-smooth scrollbar-hide relative scr overflow-x-auto flex justify-start space-x-5 md:space-x-10'
        >
          <Category
            title='phones'
            className='group'
            icon={
              <DevicePhoneMobileIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='laptops'
            className='group'
            icon={
              <ComputerDesktopIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='accessories'
            className='group'
            icon={
              <RadioIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='gaming'
            className='group'
            icon={
              <PlayCircleIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='toys'
            className='group'
            icon={
              <PuzzlePieceIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='audio & video'
            className='group'
            icon={
              <VideoCameraIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='televisions'
            className='group'
            icon={
              <TvIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='fridge and freezer'
            className='group'
            icon={
              <ExclamationTriangleIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
          <Category
            title='dishwashers'
            className='group'
            icon={
              <ArchiveBoxIcon className='icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700' />
            }
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
