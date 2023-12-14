import { IoCheckmarkDoneCircle, IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

import Link from 'next/link';

import { formatTime } from '@/lib/utils';

type Props = {
  number: number;
  title: string;
  duration: number;
  completed: boolean;
};

export const CourseChapterDropdownItem = ({ number, title, duration, completed }: Props) => (
  <li className='relative flex justify-between px-4 py-4 hover:bg-gray-50 sm:px-6'>
    <div className='flex min-w-0 items-center gap-x-4'>
      <div className='sm:flex sm:flex-col sm:items-end'>
        {completed ? (
          <IoCheckmarkDoneCircle
            className='inline-block h-auto w-6 text-green-700'
            aria-label='Lesson completed'
          />
        ) : (
          <IoCheckmarkDoneCircleOutline
            className='inline-block h-auto w-6 text-gray-400'
            aria-label='Lesson uncompleted'
          />
        )}
      </div>
      <div className='min-w-0 flex-auto'>
        <p className='mt-0.5 text-sm font-semibold leading-6 text-gray-900 sm:mt-0'>
          <Link href='#'>{`${number}: ${title}`}</Link>
        </p>
      </div>
      <p className='text-xs text-gray-500'>{formatTime(duration)}</p>
    </div>
  </li>
);
