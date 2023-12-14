import { type Metadata } from 'next';

import { ContactForm } from '@/components/Sections/ContactSection/ContactForm';
import { ContactInfo } from '@/components/Sections/ContactSection/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Do you have any questions or suggestions? Please, do not hesitate to text me!',
};

export default function ContactPage() {
  return (
    <section className='relative isolate grid grid-cols-1 lg:grid-cols-2'>
      <ContactInfo />
      <ContactForm />
    </section>
  );
}
