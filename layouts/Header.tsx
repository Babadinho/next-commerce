import React from 'react';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import Button from '@/components/Button';

const Header = () => {
  return (
    <>
      <section className='mx-auto mt-0 md:mt-6 flex justify-between h-[330px] md:h-[450px] max-w-[1250px] items-center px-3 md:px-10 bg-[#f7f7f7] shadow-sm border border-gray-200'>
        <div className='space-y-5'>
          <h1 className='space-y-2 md:space-y-3 font-semibold tracking-wide mb-4'>
            <span className='block bg-gradient-to-t from-violet-700 to-pink-600 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-6xl'>
              Powered By intellect
            </span>

            <span className='block text-2xl md:text-4xl lg:text-5xl text-slate-800'>
              Driven By Values
            </span>
          </h1>

          <div>
            <Button title='Shop Now' />
          </div>
        </div>

        <div className='relative h-[300px] w-[270px] md:h-[350px] md:w-[400px] tranition-all duration-500 md:inline'>
          <Image src='/phone.png' alt='header_image' fill objectFit='contain' />
        </div>
        {/* <Carousel /> */}
      </section>
    </>
  );
};

export default Header;
