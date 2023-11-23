import { useId } from 'react';

import { Label } from './Label';

type Props = Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label?: string };

export const SelectField = ({ label, className, ...rest }: Props) => {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...rest}
        className='block w-full appearance-none rounded-lg border border-gray-200 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] pr-8 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm'
      />
    </div>
  );
};
