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
      className={`flex items-center ${isNavSideClose ? 'justify-center' : 'justify-between'} ${
        isActive ? 'bg-yellow-300' : ''
      } border-1 hover:border-blue h-12 rounded-r-full rounded-l-none border-transparent pl-4 hover:bg-fuchsia-300`}
    >
      <Icon size={32} />
      <span className={`${isNavSideClose ? 'hidden' : 'w-full'} ml-8 text-left text-lg`}>
        {label}
      </span>
    </button>
  );
}
