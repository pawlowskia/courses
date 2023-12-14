import { contactInfoItems } from '@/lib/constants';

import { ContactInfoItem } from './ContactInfoItem';

export const ContactInfo = () => {
  return (
    <div className='mx-auto max-w-xl px-6 pb-20 pt-24 sm:pt-32 lg:mx-0 lg:max-w-lg lg:px-8 lg:py-48'>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900'>Get in touch</h2>
      <p className='mt-6 text-lg leading-8 text-gray-600'>
        Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut
        tincidunt integer elementum id sem. Arcu sed malesuada et magna.
      </p>
      <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
        {contactInfoItems.map((item) => (
          <ContactInfoItem key={item.label} {...item} />
        ))}
      </dl>
    </div>
  );
};
