"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { AuthLayout } from '@/components/UI/AuthLayout';
import { Button } from '@/components/UI/Button';
import { TextField } from '@/components/UI/TextField';

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login
        router.push('/courses');
      } else if (response.status === 401) {
        // Handle authentication failure (401)
        console.error('Authentication failed: Invalid email or password');
        // You can customize the error handling here, e.g., show a specific message to the user
      } else {
        // Handle other errors
        const errorMessage = await response.text();
        console.error('Failed to sign in');
        alert(errorMessage);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error.message);
    }
  };

  return (
    <AuthLayout
      title='Sign in to account'
      subtitle={
        <>
          Don’t have an account?{' '}
          <Link href='/register' className='text-cyan-600'>
            Sign up
          </Link>{' '}
          for free.
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
