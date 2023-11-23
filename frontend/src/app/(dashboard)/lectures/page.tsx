import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/UI/PageContentHeader';

export const metadata: Metadata = {
  title: 'All Lectures',
  description:
    'Free articles about my learning strategies, news from the chess world and much more!',
};

export default function LecturesPage() {
  return (
    <PageContentHeader
      title='Lectures'
      subtitle='Free articles about my learning strategies, news from the chess world and much more!'
    />
  );
}
