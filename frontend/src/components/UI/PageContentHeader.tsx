import { cn } from '@/lib/utils';

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const PageContentHeader = ({ title, subtitle, className }: Props) => (
  <hgroup className={cn('ml-10 mt-10 max-w-3xl', className)}>
    <h1 className='text-4xl font-medium tracking-tight text-gray-900'>{title}</h1>
    <p className='mt-6 text-lg text-gray-600'>{subtitle}</p>
  </hgroup>
);
