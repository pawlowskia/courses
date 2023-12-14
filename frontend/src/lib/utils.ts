import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(...classes));
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

export const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;

  const hoursStr = hours > 0 ? hours + 'h ' : '';
  const minsStr = mins < 10 ? '0' + mins : String(mins);
  const secsStr = secs < 10 ? '0' + secs : String(secs);

  return `${hoursStr}${minsStr}m ${secsStr}s`;
};
