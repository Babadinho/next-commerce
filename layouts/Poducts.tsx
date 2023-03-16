import Product from '@/components/Product';
import React from 'react';

const Products = () => {
  return (
    <>
      <div className='max-w-[1250px] mx-2 md:mx-auto bg-sky-900 text-white py-4 pl-5 mb-4 mt-10 md:mt-16'>
        <h2 className='text-lg md:text-xl'>Popular</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 px-2 md:px-0 max-w-[1250px] mx-auto mb-10'>
        <Product />
      </div>

      <div className='max-w-[1250px] mx-2 md:mx-auto bg-sky-900 text-white py-4 pl-5 mb-4 mt-10 md:mt-16'>
        <h2 className='text-lg md:text-xl'>Recent</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 px-2 md:px-0 max-w-[1250px] mx-auto mb-10'>
        <Product />
      </div>

      <div className='max-w-[1250px] mx-2 md:mx-auto bg-sky-900 text-white py-4 pl-5 mb-4 mt-10 md:mt-16'>
        <h2 className='text-lg md:text-xl'>Good Deals</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 px-2 md:px-0 max-w-[1250px] mx-auto mb-10'>
        <Product />
      </div>
    </>
  );
};

export default Products;
