import { cn } from '@/lib/utils';

type Props = {
  id: string;
  children: React.ReactNode;
  srOnly?: boolean;
};

export const Label = ({ id, children, srOnly }: Props) => (
  <label
    htmlFor={id}
    className={cn('mb-2 block text-sm font-semibold text-gray-900', 'sr-only' && srOnly)}
  >
    {children}
  </label>
);
