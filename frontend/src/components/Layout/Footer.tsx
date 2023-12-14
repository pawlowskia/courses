import Link from 'next/link';

import { navLinks, socialLinks } from '@/lib/constants';

export const Footer = () => (
  <footer className='bg-white'>
    <div className='mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8'>
      <nav className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12' aria-label='Footer'>
        {navLinks.map(([name, href]) => (
          <div key={name} className='pb-6'>
            <Link href={href} className='text-sm leading-6 text-gray-600 hover:text-gray-900'>
              {name}
            </Link>
          </div>
        ))}
      </nav>
      <div className='mt-10 flex justify-center space-x-10'>
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target='_blank'
            rel='noreferrer'
            className='text-gray-400 hover:text-gray-500'
          >
            <span className='sr-only'>{link.name}</span>
            <link.icon className='h-6 w-6' aria-hidden />
          </a>
        ))}
      </div>
      <p className='mt-10 text-center text-xs leading-5 text-gray-500'>
        &copy; {new Date().getFullYear()} Chess Courses. All rights reserved.
      </p>
    </div>
  </footer>
);
