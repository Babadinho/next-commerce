import Button from '@/components/Button';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <section className='mx-auto flex h-[300px] md:h-[500px] max-w-[1250px] items-center mt-8 justify-between bg-[#f7f9fa] px-4 md:px-20'>
      <div className='space-y-5'>
        <h1 className='space-y-2 md:space-y-3 font-semibold tracking-wide'>
          <span className='block bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent text-4xl lg:text-6xl'>
            Powered
          </span>
          <span className='block text-2xl md:text-4xl lg:text-6xl'>
            By intellect
          </span>
          <span className='block text-2xl md:text-4xl lg:text-6xl'>
            Driven By Values
          </span>
        </h1>

        <div>
          <Button title='Shop Now' />
        </div>
      </div>

      <div className='relative h-[300px] w-[270px] md:h-[400px] md:w-[400px] tranition-all duration-500 md:inline'>
        <Image src='/phone.png' alt='header_image' fill objectFit='contain' />
      </div>
    </section>
  );
};

export default Header;
