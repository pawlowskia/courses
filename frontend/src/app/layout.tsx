import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Chess Courses',
    default: 'Chess Courses for everyone',
  },
  description:
    'We offer a range of chess courses that cater to both beginners and advanced players. Our courses cover fundamental concepts as well as complex strategies to help players improve their gameplay professionally.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={cn('h-full bg-gray-50', inter.variable)}>
      <body className='flex h-full flex-col'>
        <div className='flex min-h-full flex-col'>{children}</div>
      </body>
    </html>
  );
}
