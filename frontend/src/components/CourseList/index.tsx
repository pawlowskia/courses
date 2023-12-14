import { type Course } from '@/types/Course';

import { CourseListItem } from './CourseListItem';

export const CourseList = ({ courses }: { courses: Course[] }) => {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
      <div className='mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
        {courses.map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
