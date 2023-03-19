type LayoutPageProps = {
  children: JSX.Element;
};

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return <section className='h-full'>{children}</section>;
};
