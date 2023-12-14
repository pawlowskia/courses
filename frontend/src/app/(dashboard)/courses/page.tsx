import { type Metadata } from 'next';

import { CourseList } from '@/components/CourseList';
import { PageContentHeader } from '@/components/UI/PageContentHeader';
import { courses } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'All Courses',
  description: 'Best openings, startegies, sacrifices - find the best course for yourself.',
};

export default function CoursesPage() {
  return (
    <>
      <PageContentHeader
        title='Chess learning made fun and easy'
        subtitle='Best openings, startegies, sacrifices - find the best course for yourself.'
      />
      <CourseList courses={courses} />
    </>
  );
}
