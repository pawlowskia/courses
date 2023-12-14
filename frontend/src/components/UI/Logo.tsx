import { FaChessKing } from 'react-icons/fa';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  includeText?: boolean;
};

export const Logo = ({ className, includeText }: Props) => (
  <div className={cn('flex items-center justify-center space-x-2 text-2xl', className)}>
    <FaChessKing className='text-cyan-500' aria-hidden />
    {includeText && <span className='font-medium text-gray-900'>Chess Courses</span>}
  </div>
);
