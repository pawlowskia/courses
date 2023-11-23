import { type IconType } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialYoutubeCircular } from 'react-icons/ti';

import { type Route } from 'next';

export const navLinks: [string, Route][] = [
  ['Courses', '/courses'],
  ['Lectures', '/lectures'],
  ['About me', '/about'],
  ['Contact', '/contact'],
];

export const userMenuLinks: [string, Route][] = [
  // TODO: change these links href
  ['Login', '/login'],
  ['Register', '/register'],
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
