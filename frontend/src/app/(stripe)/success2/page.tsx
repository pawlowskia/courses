"use client";

// PaymentSuccessPage.js
import React, { useEffect } from 'react';

const PaymentSuccessPage = () => {
  useEffect(() => {
    const saveUserToFirstCourse = async () => {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        console.error('User not found in local storage.');
        return;
      }
      console.log('User: ', storedUser)

      const user = JSON.parse(storedUser);
      const saveUserResponse = await fetch(`http://localhost:8080/api/users/courses/save-user-to-course`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          courseId: 2,
          }),
        });

        if (saveUserResponse.ok) {
          console.log('User saved to the first course successfully.');
          // redirect to the courses
            window.location.href = "/courses/2"
            
        } else {
          console.error('Error saving user to the first course:', saveUserResponse.statusText);
        }
    };

    saveUserToFirstCourse();
  }, []);

  return <div>Payment successful! User is enrolled in the first course.</div>;
};

export default PaymentSuccessPage;
