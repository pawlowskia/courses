import Link from 'next/link';

import { formatPrice } from '@/lib/utils';
import type { Course } from '@/types/Course';

export const CourseListItemDescription = ({
  course: { id, title, tags, price },
}: {
  course: Course;
}) => (
  <>
    <div className='mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900'>
      <h3 data-purpose='course-title-url'>
        <Link href={`/courses/${id}`}>
          <span aria-hidden='true' className='absolute inset-0' />
          {title}
        </Link>
      </h3>
      <p>{formatPrice(price / 100)}</p>
    </div>
    {tags.map((tag, i) => (
      <p key={i} className='mt-1 text-sm text-gray-500'>
        {tag}
      </p>
    ))}
  </>
);
