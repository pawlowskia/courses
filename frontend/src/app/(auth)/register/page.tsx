"use client"
import { useState } from 'react';
import Link from 'next/link';
import { AuthLayout } from '@/components/UI/AuthLayout';
import { Button } from '@/components/UI/Button';
import { TextField } from '@/components/UI/TextField';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log("Form Data: ", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data: ", formData)

    // Call the function to send data to the Spring Boot backend
    await sendDataToBackend(formData);
  };

  const sendDataToBackend = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success, e.g., redirect to another page
        console.log('Data sent successfully');
        alert("Account created successfully");
      } else {
        // Handle error
        const errorMessage = await response.text();
        console.error('Failed to send data to the backend');
        // if 409, then username or email already exists
        if (response.status === 409) {
          alert("Username or email already exists");
        }
        else{
          alert("Failed to send data to the backend");
        }
        
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error.message);
    }
  };

  return (
    <AuthLayout
      title='Sign up for an account'
      subtitle={
        <>
          Already registered?{' '}
          <Link href='/login' className='text-cyan-600'>
            Sign in
          </Link>{' '}
          to your account.
        </>
      }
    >
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-6'>
          <TextField
            className='col-span-full'
            label='Username'
            name='username'
            type='text'
            autoComplete='given-name'
            required
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            className='col-span-full'
            label='Email address'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            className='col-span-full'
            label='Password'
            name='password'
            type='password'
            autoComplete='new-password'
            required
            value={formData.password}
            onChange={handleChange}
          />
          {/* Add other input fields as needed */}
        </div>
        <Button type='submit' color='cyan' className='mt-8 w-full'>
          Get started today
        </Button>
      </form>
    </AuthLayout>
  );
}
