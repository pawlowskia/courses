import NextImage, { type StaticImageData } from 'next/image';

type Props = {
  src: StaticImageData;
  alt: string;
};

export const HeroSectionImage = ({ src, alt }: Props) => {
  return (
    <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
      <NextImage
        src={src}
        alt={alt}
        priority
        className='lg:aspect-auto aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:h-full'
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  );
};
