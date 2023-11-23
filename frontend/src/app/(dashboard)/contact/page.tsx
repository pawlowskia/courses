import { type Metadata } from 'next';

import { PageContentHeader } from '@/components/UI/PageContentHeader';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Do you have any questions or suggestions. Please, do not hesitate to text me!',
};

export default function ContactPage() {
  return (
    <PageContentHeader
      title='Contact with me'
      subtitle='Do you have any questions or suggestions. Please, do not hesitate to text me!'
    />
  );
}
