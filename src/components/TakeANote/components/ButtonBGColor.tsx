import { Tooltip } from '@/components/Tooltip/Tooltip';
import { editorTheme } from '@/constants/editorTheme';
import { usePopover } from '@/hooks/usePopover';

type ButtonBgColorProps = {
  color: string;
  isCurrentColor: boolean;
  children?: JSX.Element;
  tooltip?: string;
};

const { buttonColor } = editorTheme;

export const ButtonBGColor = ({
  color,
  children,
  isCurrentColor,
  tooltip,
}: ButtonBgColorProps) => {
  const activeButtonClass = isCurrentColor
    ? 'border-purple-500'
    : 'border-transparent';

  // @ts-ignore
  const currentButtonColor = buttonColor[color] as string;

  const {
    isOn,
    coords,
    updateTooltipCoords,
    handleMouseEnter,
    handleMouseLeave,
  } = usePopover();

  return (
    <>
      <button
        key={color}
        data-bg={color}
        // eslint-disable-next-line
        className={`flex justify-center items-center h-7 w-7 rounded-full ${currentButtonColor} border-2 hover:border-black ${activeButtonClass}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
      {isOn && tooltip && (
        <Tooltip
          coords={coords}
          updateTooltipCoords={() =>
            // @ts-ignore
            updateTooltipCoords(btnRef.current.buttonNode)
          }
          tooltip={tooltip}
        />
      )}
    </>
  );
};
