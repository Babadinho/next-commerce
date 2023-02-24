import React from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Tabs = () => {
  return (
    <div className='w-full max-w-md px-2 py-16 sm:px-0 mx-auto mt-5 md:mt-10'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-violet-500 p-1'>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-violet-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Recent
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-violet-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Popular
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-violet-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-white hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            Trending
          </Tab>
        </Tab.List>
        <Tab.Panels className='mt-2'>
          <Tab.Panel className='tabPanel'></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
