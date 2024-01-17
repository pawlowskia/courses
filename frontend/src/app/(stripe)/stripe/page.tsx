"use client";

import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OZXi3Fawk2J9133T0giRgki67PDXMnFFT7qlHCjk98jdBsDPpfrbEUrtkYPdiXJXJMYpAPFeQXY8ym0AT3zKAHG00gWU37jeG');

const StripePaymentPage = () => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe?.redirectToCheckout({
      mode: 'payment',
      lineItems: [{ price: 'price_1OZdoHFawk2J9133UfMgUZQC', quantity: 1 }],
      successUrl: 'http://localhost:3000/success',
      cancelUrl: 'http://localhost:3000/courses',
    });

    if (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    handleClick(); // Auto-redirect on page load
  }, []);

  return <div>Redirecting to Stripe Payment...</div>;
};

export default StripePaymentPage;
