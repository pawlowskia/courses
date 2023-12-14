import type { Route } from 'next';

import { Button } from '@/components/UI/Button';
import { Logo } from '@/components/UI/Logo';

type Props<T extends string> = {
  header: string;
  subheader: string;
  links?: {
    text: string;
    href: Route<T>;
  }[];
};

export const HeroSectionText = <T extends string>({ header, subheader, links }: Props<T>) => {
  return (
    <div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <Logo className='text-4xl' />
        <h1 className='mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl'>
          {header}
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600'>{subheader}</p>
        <div className='mt-10 flex items-center gap-x-6'>
          {links?.map(({ text, href }, index) => {
            return index % 2 === 0 ? (
              <Button key={text} href={href as Route} color='cyan'>
                {text}
              </Button>
            ) : (
              <Button key={text} href={href as Route}>
                {text} &nbsp; <span aria-hidden>→</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
