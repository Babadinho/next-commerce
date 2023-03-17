import React from 'react';

const Search = () => {
  return (
    <div className='justify-center'>
      <div className='xl:w-96'>
        <div className='relative flex w-full flex-wrap items-stretch'>
          <input
            type='search'
            className='relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-sky-900 bg-transparent bg-clip-padding px-3 py-1.5 text-sm font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 italic'
            placeholder='Search products'
            aria-label='Search'
            aria-describedby='button-addon1'
          />
          <button
            className='relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white transition duration-150 ease-in-out bg-sky-900 hover:bg-sky-800 focus:bg-sky-800 focus:outline-none focus:ring-0 active:bg-sky-800'
            type='button'
            id='button-addon1'
            data-te-ripple-init
            data-te-ripple-color='light'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fill-rule='evenodd'
                d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
