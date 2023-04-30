import { MdOutlineFormatColorReset } from 'react-icons/md';

import { ButtonBGColor } from '@/components/TakeANote/ButtonBGColor';

type Props = {
  currentBackgroundColor: string;
};

export const BackgroundColorSelector = ({ currentBackgroundColor }: Props) => {
  return (
    <div className='flex gap-1 bg-light dark:bg-dark'>
      <ButtonBGColor
        color='inherit'
        isCurrentColor={currentBackgroundColor === 'inherit'}
      >
        <MdOutlineFormatColorReset />
      </ButtonBGColor>
      {/* {backgroundColors.map((color) => {
        const isCurrentColor = color === currentBackgroundColor;
        return (
          <ButtonBGColor
            key={color}
            color={color}
            isCurrentColor={isCurrentColor}
          />
        );
      })} */}
      <div className='flex gap-1 bg-light dark:bg-dark'>
        <button
          data-bg='red'
          className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-red-300 hover:border-black`}
        ></button>
        <button
          data-bg='orange'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-orange-300 hover:border-black'
        ></button>
        <button
          data-bg='yellow'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-yellow-300 hover:border-black'
        ></button>
        <button
          data-bg='green'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-green-300 hover:border-black'
        ></button>
        <button
          data-bg='teal'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-teal-300 hover:border-black'
        ></button>
        <button
          data-bg='blue'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-blue-300 hover:border-black'
        ></button>
        <button
          data-bg='purple'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-purple-300 hover:border-black'
        ></button>
        <button
          data-bg='pink'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-pink-300 hover:border-black'
        ></button>
        <button
          data-bg='violet'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-violet-300 hover:border-black'
        ></button>
        <button
          data-bg='gray'
          className='flex h-7 w-7 items-center justify-center rounded-full border-2 border-transparent bg-gray-300 hover:border-black'
        ></button>
      </div>
    </div>
  );
};
