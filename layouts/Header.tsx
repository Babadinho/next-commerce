import React from 'react';
import Carousel from '@/components/Carousel';

const Header = () => {
  return (
    <>
      <section className='mx-auto mt-1 md:mt-6 flex h-[300px] md:h-[400px] max-w-[1250px] items-center px-1 md:px-0'>
        {/* <div className='space-y-5'>
      <h1 className='space-y-2 md:space-y-3 font-semibold tracking-wide'>
        <span className='block bg-gradient-to-t from-violet-700 to-pink-600 bg-clip-text text-transparent text-4xl lg:text-6xl'>
          Powered
        </span>
        <span className='block text-2xl md:text-4xl lg:text-5xl text-slate-800'>
          By intellect
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
    </div> */}
        <Carousel />
      </section>
    </>
  );
};

export default Header;
