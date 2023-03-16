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
    'icon h-10 w-10 md:w-16 md:h-16 group-hover:scale-90 transition-transform duration-700';

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
      <div className='relative mx-auto max-w-[1250px] mt-3'>
        <div className='absolute right-0 top-5 z-10'>
          <button
            onClick={scrollLeft}
            className='p-2 m-2 rounded-full bg-[#f7f7f7] shadow-sm'
          >
            <ChevronLeftIcon className='h-5 w-5' />
          </button>
          <button
            onClick={scrollRight}
            className='p-2 m-2 rounded-full bg-[#f7f7f7] shadow-sm'
          >
            <ChevronRightIcon className='h-5 w-5' />
          </button>
        </div>

        <div
          ref={carousel}
          className='carousel scroll-smooth scrollbar-hide relative overflow-x-auto flex justify-start space-x-5 md:space-x-8'
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
