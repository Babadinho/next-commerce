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
        className={`relative w-20 h-20 md:w-40 md:h-40 rounded-full flex items-center justify-center transition-all duration-300 bg-[#E7ECEE] ease text-slate-700 hover:text-slate-800`}
      >
        {icon}
      </a>
      <span className='text-sm md:text-lg capitalize text-center'>{title}</span>
    </div>
  );
};

export default Category;
