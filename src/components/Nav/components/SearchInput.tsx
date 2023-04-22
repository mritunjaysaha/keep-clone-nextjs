import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

import ROUTES from '@/constants/routes.json';

type SearchInputProps = {
  placeholder: string;
};

export function SearchInput({ placeholder }: SearchInputProps) {
  const router = useRouter();
  const [val, setVal] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
  }

  function handleCloseClick() {
    router.push(ROUTES.HOME);
  }

  function handleSearchClick() {}

  return (
    <div className='flex h-12 w-1/2 items-center justify-center rounded-md bg-gray-600 p-2'>
      <form className='flex w-full items-center'>
        <button onClick={handleSearchClick} className='h-max'>
          <BiSearchAlt2 size={20} className='mr-2 text-white' />
        </button>
        <input
          className='h-8 w-96 bg-inherit pl-4 text-white placeholder:text-white focus:outline-none'
          value={val}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>

      <button className='ml-2' onClick={handleCloseClick}>
        <IoCloseOutline size={24} className='text-16 cursor-pointer text-white' />
      </button>
    </div>
  );
}
