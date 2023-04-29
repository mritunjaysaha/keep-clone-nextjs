import { MdOutlineFormatColorReset } from 'react-icons/md';

import { ButtonBGColor } from '@/components/TakeANote/ButtonBGColor';
import { backgroundColors } from '@/constants/backgroundColors';

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
      {backgroundColors.map((color) => {
        const isCurrentColor = color === currentBackgroundColor;
        return (
          <ButtonBGColor
            key={color}
            color={color}
            isCurrentColor={isCurrentColor}
          />
        );
      })}
    </div>
  );
};
