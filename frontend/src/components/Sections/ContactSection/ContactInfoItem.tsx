import type { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  text: string;
  label: string;
};

export const ContactInfoItem = ({ Icon, text, label }: Props) => {
  return (
    <div className='flex gap-x-4'>
      <dt className='flex-none'>
        <span className='sr-only'>{label}</span>
        <Icon className='h-7 w-6 text-gray-400' aria-hidden />
      </dt>
      <dd>{text}</dd>
    </div>
  );
};
