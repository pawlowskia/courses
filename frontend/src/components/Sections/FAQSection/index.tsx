import { faqs } from '@/lib/constants';

import { FAQSectionItem } from './FAQSectionItem';

export const FAQSection = () => {
  return (
    <section className='mx-auto max-w-4xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
      <h2 className='text-center text-3xl font-bold leading-10 tracking-tight text-gray-900'>
        Frequently Asked Questions
      </h2>
      <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
        {faqs.map((faq) => (
          <FAQSectionItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </dl>
    </section>
  );
};
