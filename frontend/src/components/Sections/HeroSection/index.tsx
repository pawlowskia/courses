import { type Route } from 'next';
import type { StaticImageData } from 'next/image';

import { HeroSectionImage } from './HeroSectionImage';
import { HeroSectionText } from './HeroSectionText';

type Props<T extends string> = {
  src: StaticImageData;
  alt: string;
  header: string;
  subheader: string;
  links?: {
    text: string;
    href: Route<T>;
  }[];
};

export const HeroSection = <T extends string>(props: Props<T>) => {
  return (
    <section className='relative'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <HeroSectionText {...props} />
        <HeroSectionImage {...props} />
      </div>
    </section>
  );
};
