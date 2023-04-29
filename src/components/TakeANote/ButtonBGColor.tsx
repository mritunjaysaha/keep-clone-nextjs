type ButtonBgColorProps = {
  color: string;
  isCurrentColor: boolean;
  children?: JSX.Element;
};

export const ButtonBGColor = ({
  color,
  children,
  isCurrentColor,
}: ButtonBgColorProps) => {
  const activeButtonClass = isCurrentColor
    ? 'border-purple-500'
    : 'border-transparent';

  return (
    <button
      key={color}
      data-bg={color}
      // eslint-disable-next-line
      className={`flex justify-center items-center h-7 w-7 rounded-full bg-${color}-300 border-2 hover:border-black ${activeButtonClass}`}
    >
      {children}
    </button>
  );
};
