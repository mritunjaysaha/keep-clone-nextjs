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
      className={`flex items-center ${
        isNavSideClose ? 'justify-center' : 'rounded-r-full rounded-l-none pl-2'
      } ${
        isActive && !isNavSideClose ? 'bg-yellow-200 dark:bg-yellow-800' : ''
      } border-1 hover:border-blue h-12 border-transparent hover:bg-gray-50 dark:hover:bg-gray-600`}
    >
      <Icon size={20} />
      <span className={`${isNavSideClose ? 'hidden' : 'w-full'} pl-4 text-left text-lg`}>
        {label}
      </span>
    </button>
  );
}
