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

const Categories = ({ categories }: { categories: Category[] }) => {
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

  const iconClassName =
    'icon h-10 w-10 md:w-20 md:h-20 group-hover:scale-75 transition-transform duration-700';

  const categoryIcons: { [key: string]: JSX.Element } = {
    phones: <DevicePhoneMobileIcon className={iconClassName} />,
    laptops: <ComputerDesktopIcon className={iconClassName} />,
    accessories: <RadioIcon className={iconClassName} />,
    gaming: <PlayCircleIcon className={iconClassName} />,
    toys: <PuzzlePieceIcon className={iconClassName} />,
    'audio & video': <VideoCameraIcon className={iconClassName} />,
    televisions: <TvIcon className={iconClassName} />,
    'fridge & freezer': <ExclamationTriangleIcon className={iconClassName} />,
    dishwashers: <ArchiveBoxIcon className={iconClassName} />,
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
          {categories.map((category) => {
            return (
              <Category
                key={category._id}
                title={category.title}
                className='group'
                icon={categoryIcons[category.title]}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
