import { useId } from 'react';

import { cn } from '@/lib/utils';

import { Label } from './Label';

type Props = Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
  label?: string;
  icon?: React.ReactNode;
  srOnlyLabel?: boolean;
  error?: string;
};

export const InputField = ({
  label,
  icon,
  srOnlyLabel,
  error,
  type = 'text',
  className,
  ...rest
}: Props) => {
  const id = useId();

  return (
    <div className={cn(className, 'relative' && icon)}>
      {label && (
        <Label id={id} srOnly={srOnlyLabel}>
          {label}
        </Label>
      )}
      {icon && (
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {icon}
        </div>
      )}
      <input
        id={id}
        type={type}
        className={cn(
          'block w-full appearance-none rounded-lg border border-gray-200 bg-white px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm',
          'pl-10' && icon
        )}
        {...rest}
      />
      {error && <p className='mt-1 text-center text-sm text-red-500'>{error}</p>}
    </div>
  );
};
