import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Product = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-40 px-2 md:px-0 max-w-[1250px] mx-auto mb-10'>
      <div className='mx-auto w-full md:w-80 transform overflow-hidden rounded-sm bg-white dark:bg-slate-800 shadow-md duration-300'>
        <img
          className='h-40 md:h-48 w-full object-cover object-center'
          src='https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Product Image'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-medium dark:text-white text-gray-900'>
            Product Name
          </h2>
          <p className='mb-2 text-sm md:text-base dark:text-gray-300 text-gray-700'>
            Product description goes here.
          </p>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center'>
              <p className='mr-2 text-lg font-semibold text-gray-900 dark:text-white'>
                $20.00
              </p>
              <p className='hidden md:block text-base font-medium text-gray-500 line-through dark:text-gray-300'>
                $25.00
              </p>
            </div>
            <div className='bg-[#E7ECEE] p-2 rounded-full text-slate-700 cursor-pointer hover:bg-[#e7eceebb] hover:text-slate-800'>
              <ShoppingCartIcon className='h-7 w-7 md:h-8 md:w-8' />
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-full md:w-80 transform overflow-hidden rounded-sm bg-white dark:bg-slate-800 shadow-md duration-300'>
        <img
          className='h-40 md:h-48 w-full object-cover object-center'
          src='https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Product Image'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-medium dark:text-white text-gray-900'>
            Product Name
          </h2>
          <p className='mb-2 text-sm md:text-base dark:text-gray-300 text-gray-700'>
            Product description goes here.
          </p>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center'>
              <p className='mr-2 text-lg font-semibold text-gray-900 dark:text-white'>
                $20.00
              </p>
              <p className='hidden md:block text-base font-medium text-gray-500 line-through dark:text-gray-300'>
                $25.00
              </p>
            </div>
            <div className='bg-[#E7ECEE] p-2 rounded-full text-slate-700 cursor-pointer hover:bg-[#e7eceebb] hover:text-slate-800'>
              <ShoppingCartIcon className='h-7 w-7 md:h-8 md:w-8' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;