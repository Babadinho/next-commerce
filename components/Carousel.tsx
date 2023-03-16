import React from 'react';
import Image from 'next/image';
const Phone = require('../public/phone.png');

const Carousel = () => {
  return (
    <div
      id='carouselExampleCaptions'
      className='relative h-[300px] md:h-[400px] w-[1350px]'
      data-te-carousel-init
      data-te-carousel-slide
    >
      <div
        className='absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0'
        data-te-carousel-indicators
      >
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='0'
          data-te-carousel-active
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-te-target='#carouselExampleCaptions'
          data-te-slide-to='1'
          className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
          aria-label='Slide 2'
        ></button>
      </div>
      <div className="relative h-[300px] md:h-[400px] max-w-[1250px] overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className='relative h-full float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-active
          data-te-carousel-fade
          data-te-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src='https://www.menkind.co.uk/images/stencil/1280w/image-manager/homepagegadgetsdesktop01march.jpg'
            className='block w-full object-fill h-full'
            alt='...'
          />
          <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
            <h5 className='text-xl'>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div
          className='relative h-full float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
          data-te-carousel-fade
          data-te-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src='https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg'
            className='block w-full object-fill h-full'
            alt='...'
          />
          <div className='absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block'>
            <h5 className='text-xl'>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className='absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
        type='button'
        data-te-target='#carouselExampleCaptions'
        data-te-slide='prev'
      >
        <span className='inline-block h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </span>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Previous
        </span>
      </button>
      <button
        className='absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
        type='button'
        data-te-target='#carouselExampleCaptions'
        data-te-slide='next'
      >
        <span className='inline-block h-8 w-8'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-6 w-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </span>
        <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;
