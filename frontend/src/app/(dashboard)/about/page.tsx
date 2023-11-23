import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/UI/PageContentHeader';

export const metadata: Metadata = {
  title: 'About me',
  description:
    'How did my chess journey begin? What are my accomplishments? Learn more about me below!',
};

export default function AboutPage() {
  return (
    <PageContentHeader
      title='About me'
      subtitle='How did my chess journey begin? What are my accomplishments? Learn more about me below!'
    />
  );
}
