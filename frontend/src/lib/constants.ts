import { type IconType } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialYoutubeCircular } from 'react-icons/ti';

import { type Route } from 'next';

import { type Course } from '@/types/Course';

export const navLinks: [string, Route][] = [
  ['Courses', '/courses'],
  ['Lectures', '/lectures'],
  ['About me', '/about'],
  ['Contact', '/contact'],
];

export const userMenuLinks: [string, Route][] = [
  ['Login', '/login'],
  ['Register', '/register'],
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Beginner Chess',
    description: 'Beginner Course',
    image: '/images/beginner.jpg',
    tags: ['Beginner'],
    duration: 2,
    price: 29999,
    rating: 4.7,
  },
  {
    id: '2',
    title: 'Advanced Chess',
    description: 'Advanced Course',
    image: '/images/advanced.jpg',
    tags: ['Advanced'],
    duration: 7,
    price: 9999,
    rating: 4.3,
  },
  {
    id: '3',
    title: 'Intermediate Chess',
    description: 'Intermediate Course',
    image: '/images/intermediate.jpg',
    tags: ['Intermediate'],
    duration: 4,
    price: 14999,
    rating: 4.9,
  },
  {
    id: '1',
    title: 'Level 0',
    description: 'Total Beginner course',
    image: '/images/total-beginner.png',
    tags: ['Beginner'],
    duration: 1,
    price: 4999,
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
  {
    question: 'Do you provide additional support?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
  {
    question: 'What is the best way to contact you?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
  {
    question: 'Do you provide custom services?',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem.',
  },
];

export const socialLinks: { name: string; href: Route; icon: IconType }[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100007366247100',
    icon: FaFacebook,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: TiSocialYoutubeCircular,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kosaczeq_/',
    icon: AiFillInstagram,
  },
];
