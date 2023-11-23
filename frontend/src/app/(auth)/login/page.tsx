import { type Metadata } from 'next';
import Link from 'next/link';

import { AuthLayout } from '@/components/UI/AuthLayout';
import { Button } from '@/components/UI/Button';
import { TextField } from '@/components/UI/TextField';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function SignInPage() {
  return (
    <AuthLayout
      title='Sign in to account'
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href='/register' className='text-cyan-600'>
            Sign up
          </Link>{' '}
          for a free trial.
        </>
      }
    >
      <form>
        <div className='space-y-6'>
          <TextField
            label='Email address'
            name='email'
            type='email'
            autoComplete='email'
            required
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
          />
        </div>
        <Button type='submit' color='cyan' className='mt-8 w-full'>
          Sign in to account
        </Button>
      </form>
    </AuthLayout>
  );
}
