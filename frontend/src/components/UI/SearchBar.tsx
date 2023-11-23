'use client';

import { type ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { type Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';

import { useDebounce } from '@/hooks/useDebounce';

import { TextField } from './TextField';

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('query') || '');
  const debouncedValue = useDebounce(searchValue, 500);

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (value === '') {
      router.back();
    }

    setSearchValue(value);
  };

  useEffect(() => {
    if (debouncedValue) {
      router.push(`/search?query=${debouncedValue.trim()}` as Route);
    }
  }, [debouncedValue, router]);

  return (
    <TextField
      type='search'
      label='Search'
      icon={<AiOutlineSearch className='h-5 w-5 text-gray-400' />}
      srOnlyLabel
      onChange={handleChange}
      autoComplete='off'
      autoCorrect='off'
      autoCapitalize='off'
      spellCheck='false'
    />
  );
};
