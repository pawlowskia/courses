import { cn } from '@/lib/utils';

export const Container = ({ className, ...rest }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)} {...rest} />
);
