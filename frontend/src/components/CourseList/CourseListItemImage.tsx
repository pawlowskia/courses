 import NextImage from 'next/image';

import type { Course } from '@/types/Course';

export const CourseListItemImage = async ({ course: { title, image } }: { course: Course }) => (
  <div className='aspect-h-3 aspect-w-4 relative overflow-hidden rounded-lg bg-gray-100'>
    <NextImage
      src={image}
      alt={title}
      fill
      sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
      className='object-cover object-center'
    />
    <div className='flex items-end p-4 opacity-0 group-hover:opacity-100' aria-hidden='true'>
      <div className='w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter'>
        View Course
      </div>
    </div>
  </div>
);
