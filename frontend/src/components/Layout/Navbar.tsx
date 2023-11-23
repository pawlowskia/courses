'use client';

import { Fragment } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { IoIosMenu, IoMdClose } from 'react-icons/io';
import { Disclosure, Menu, Transition } from '@headlessui/react';

import Link from 'next/link';

import { navLinks, userMenuLinks } from '@/lib/constants';

import { ActiveLink } from '../UI/ActiveLink';
import { Logo } from '../UI/Logo';

export const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 justify-between'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <IoMdClose className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <IoIosMenu className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Logo />
                <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
                  {navLinks.map(([name, href]) => (
                    <ActiveLink
                      key={href}
                      href={href}
                      className='inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'
                      activeClassName='border-cyan-500 text-gray-900'
                    >
                      {name}
                    </ActiveLink>
                  ))}
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button
                  type='button'
                  className='relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
                >
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>View cart</span>
                  <FaShoppingCart className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='relative flex rounded-full bg-white text-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'>
                      <span className='absolute -inset-1.5' />
                      <span className='sr-only'>Open user menu</span>
                      <FaUser className='h-5 w-auto' aria-hidden='true' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userMenuLinks.map(([name, href]) => (
                        <Menu.Item key={href}>
                          <Link
                            href={href}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          >
                            {name}
                          </Link>
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-4 pt-2'>
              {navLinks.map(([name, href]) => (
                <Disclosure.Button
                  key={href}
                  as={ActiveLink}
                  href={href}
                  className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                  activeClassName='bg-indigo-50 border-cyan-500 text-cyan-800'
                >
                  {name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
