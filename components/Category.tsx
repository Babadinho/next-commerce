import React from 'react';

interface Props {
  title: string;
  icon?: any;
  onClick?: () => void;
  className?: string;
}

const Category = ({ title, icon, onClick, className }: Props) => {
  return (
    <div
      className={`flex flex-col items-center  mt-20 space-y-4 cursor-pointer ${className}`}
    >
      <a
        className={`relative w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-300 bg-[#f7f7f7] ease text-sky-900 hover:text-sky-800 shadow-sm border border-gray-200`}
      >
        {icon}
      </a>
      <span className='text-sm md:text-md capitalize text-center'>{title}</span>
    </div>
  );
};

export default Category;
