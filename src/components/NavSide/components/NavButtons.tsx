type NavButtonProps = {
  icon: any;
  label: string;
  isActive: boolean;
  isNavSideClose: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function NavButtons({
  icon: Icon,
  label,
  isNavSideClose,
  isActive,
  onClick,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex h-12 items-center ${
        isNavSideClose
          ? 'w-12 justify-center rounded-full'
          : 'rounded-r-full rounded-l-none pl-2'
      } ${
        isActive ? 'bg-yellow-200 dark:bg-yellow-800' : ''
      } border-1 hover:border-blue border-transparent hover:bg-gray-50 dark:hover:bg-gray-600`}
    >
      <Icon size={20} />
      <span
        className={`${
          isNavSideClose ? 'hidden' : 'w-full'
        } pl-4 text-left text-lg`}
      >
        {label}
      </span>
    </button>
  );
}
