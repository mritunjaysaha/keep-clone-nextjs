import type { ChangeEventHandler } from 'react';
import { useRef } from 'react';
import { IoImageOutline } from 'react-icons/io5';

import { ButtonIcon } from '@/components/Atoms/ButtonIcon/ButtonIcon';

type UploadImageType = {
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const UploadImage = ({ onChange }: UploadImageType) => {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      // @ts-ignore
      inputRef.current.click();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type='file'
        accept='image/*'
        className='hidden'
        onChange={onChange}
      />
      <ButtonIcon
        icon={IoImageOutline}
        tooltip='Add Image'
        onClick={handleButtonClick}
      />
    </>
  );
};
