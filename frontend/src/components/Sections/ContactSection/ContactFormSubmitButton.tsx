'use client';

import { useFormStatus } from 'react-dom';

import { cn } from '@/lib/utils';

export const ContactFormSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      aria-disabled={pending}
      className={cn(
        'rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600',
        {
          'cursor-wait bg-cyan-400': pending,
        }
      )}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
};
