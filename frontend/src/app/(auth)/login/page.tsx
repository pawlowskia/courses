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

    console.log('Form data', formData);

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
        // save user data to local storage
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        // display a toast welcome message
        // console.log('Welcome back!' + user.name);
        alert('Welcome back ' + user.username + '!');
      } else if (response.status === 401) {
        // Handle authentication failure (401)
        console.error('Authentication failed: Invalid email or password');
        alert('Authentication failed: Invalid email or password');
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
      <form onSubmit={handleSubmit}>
        <div className='space-y-6'>
          <TextField
            label='Email address'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label='Password'
            name='password'
            type='password'
            autoComplete='current-password'
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button type='submit' color='cyan' className='mt-8 w-full'>
          Sign in to account
        </Button>
      </form>
    </AuthLayout>
  );
}
