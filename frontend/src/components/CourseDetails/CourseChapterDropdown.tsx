import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { formatTime } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  title: string;
  number: number;
  duration: number;
  completed: boolean;
  lessonsCount: number;
};

export const CourseChapterDropdown = ({
  children,
  title,
  number,
  duration,
  completed,
  lessonsCount,
}: Props) => (
  <details className='group'>
    <summary className='flex flex-col justify-between gap-x-4 gap-y-1 rounded-md border-gray-200 bg-gray-50 px-4 py-4 marker:hidden group-open:rounded-b-none group-open:border-b sm:flex-row sm:items-center sm:px-6'>
      <h3 className='inline-flex scroll-mt-4 font-bold' id={`section ${number}`}>
        <MdOutlineKeyboardArrowRight className='mr-2 inline-flex text-gray-600 transition-transform group-open:rotate-90' />
        {`Chapter ${number}: ${title}`}
        {completed && (
          <IoCheckmarkDoneCircle
            className='ml-2 mt-0.5 inline-flex h-5 w-5 flex-shrink-0 text-green-700'
            aria-label='Section completed'
          />
        )}
      </h3>
      <div className='ml-8 divide-x-2 divide-dotted whitespace-nowrap text-sm text-gray-600 sm:ml-0'>
        <span className='pr-2'>{`${lessonsCount} lessons`}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </summary>
    {children}
  </details>
);
