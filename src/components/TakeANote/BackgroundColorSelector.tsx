import { MdOutlineFormatColorReset } from 'react-icons/md';

import { ButtonBGColor } from '@/components/TakeANote/ButtonBGColor';
import { editorTheme } from '@/constants/editorTheme';

type Props = {
  currentBackgroundColor: string;
};

const { buttonColor } = editorTheme;

export const BackgroundColorSelector = ({ currentBackgroundColor }: Props) => {
  return (
    <div className='flex gap-1 bg-light dark:bg-dark'>
      <ButtonBGColor
        color='inherit'
        isCurrentColor={currentBackgroundColor === 'inherit'}
      >
        <MdOutlineFormatColorReset />
      </ButtonBGColor>
      {Object.keys(buttonColor).map((color) => {
        const isCurrentColor = color === currentBackgroundColor;
        return (
          <ButtonBGColor
            key={color}
            // @ts-ignore
            color={buttonColor[color]}
            isCurrentColor={isCurrentColor}
            tooltip={color}
          />
        );
      })}
    </div>
  );
};
