import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  price?: string;
  icon?: any;
  onClick?: () => void;
  className?: string;
}

// interface Props {
//   product: Product
// }

const Product = ({
  title,
  description,
  price,
  icon,
  onClick,
  className,
}: Props) => {
  return (
    <>
      <div className='mx-auto w-full md:w-72 transform overflow-hidden rounded-sm bg-white shadow-sm duration-300'>
        <img
          className='h-40 md:h-48 w-full object-cover object-center'
          src='https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Product Image'
        />
        <div className='p-4'>
          <h2 className='mb-2 text-lg font-medium text-gray-900'>
            Product Name
          </h2>
          <p className='mb-2 text-sm md:text-base text-gray-700'>
            Product description goes here.
          </p>
          <div className='flex items-center justify-between mt-3'>
            <div className='flex items-center'>
              <p className='mr-2 text-lg font-semibold text-gray-900'>$20.00</p>
              <p className='hidden md:block text-base font-medium text-gray-500 line-through'>
                $25.00
              </p>
            </div>
            <div className='bg-[#e9e9ec] p-2 rounded-full text-gray-700 cursor-pointer hover:bg-[#d6d6da] hover:text-gray-800 drop-shadow-sm transition-all duration-300'>
              <ShoppingBagIcon className='h-7 w-7' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
