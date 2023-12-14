'use client';

import { FiMinus, FiPlus } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';

type Props = {
  question: string;
  answer: string;
};

export const FAQSectionItem = ({ question, answer }: Props) => {
  return (
    <Disclosure as='div' className='pt-6'>
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
              <span className='text-base font-semibold leading-7'>{question}</span>
              <span className='ml-6 flex h-7 items-center'>
                {open ? (
                  <FiMinus className='h-6 w-6' aria-hidden />
                ) : (
                  <FiPlus className='h-6 w-6' aria-hidden />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as='dd' className='mt-2 pr-12'>
            <p className='text-base leading-7 text-gray-600'>{answer}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
