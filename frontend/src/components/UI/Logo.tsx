import { FaChessKing } from 'react-icons/fa';

import Link from 'next/link';

export const Logo = ({ includeText = true }: { includeText?: boolean }) => (
  <Link
    href='/'
    aria-label='Home Page'
    title='Home Page'
    className='flex items-center justify-center space-x-2 text-2xl'
  >
    <FaChessKing className='text-cyan-500' aria-hidden='true' />
    {includeText && <span className='font-medium text-gray-900'>Chess Courses</span>}
  </Link>
);
