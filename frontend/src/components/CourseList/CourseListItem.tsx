import { type Course } from '@/types/Course';

import { CourseListItemDescription } from './CourseListItemDescription';
import { CourseListItemImage } from './CourseListItemImage';

export const CourseListItem = ({ course }: { course: Course }) => (
  <div className='group relative animate-fade-in'>
    <CourseListItemImage course={course} />
    <CourseListItemDescription course={course} />
  </div>
);
