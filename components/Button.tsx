import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

const Button = ({ title, onClick, width, loading, padding, noIcon }: Props) => {
  return (
    <a
      href='#_'
      className={`box-border relative inline-flex items-center justify-center ${
        width ? width : 'w-auto'
      } ${padding} px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-violet-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-violet-500 ease focus:outline-none`}
      onClick={onClick}
    >
      <span className='absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0'></span>
      <span className='absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0'></span>
      <span className='relative z-20 flex items-center text-sm'>
        {noIcon && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='relative w-5 h-5 mr-2 text-white'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
        )}
        {loading ? 'Loading...' : title}
      </span>
    </a>
  );
};

export default Button;
