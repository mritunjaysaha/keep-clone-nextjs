import { MdOutlineFormatColorReset } from 'react-icons/md';

import { ButtonBGColor } from '@/components/TakeANote/components/ButtonBGColor';
import { editorTheme } from '@/constants/editorTheme';

type Props = {
  currentBackgroundColor: string;
};

const { buttonColor } = editorTheme;

export const BackgroundColorSelector = ({ currentBackgroundColor }: Props) => {
  return (
    <div
      className='box-shadow-editor absolute bottom-0  left-1/2 flex w-max translate-y-1/2
    -translate-x-1/2 gap-1  rounded-md bg-light p-2 dark:bg-dark'
    >
      <ButtonBGColor
        color='inherit'
        isCurrentColor={currentBackgroundColor === 'inherit'}
      >
        <MdOutlineFormatColorReset />
      </ButtonBGColor>
      {Object.keys(buttonColor).map((color) => {
        const isCurrentColor = color === currentBackgroundColor;

        console.log('[BackgroundColorSelector]', {
          color,
          currentBackgroundColor,
          isCurrentColor,
        });
        return (
          <ButtonBGColor
            key={color}
            // @ts-ignore
            color={color}
            isCurrentColor={isCurrentColor}
            tooltip={color}
          />
        );
      })}
    </div>
  );
};
