import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const SignboardContainer: FC<Props> = ({ children }) => {
  return (
    <div className="relative rounded-none border-0 bg-slate-100 shadow sm:rounded-lg sm:border">
      {children}
      <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute right-3 bottom-3 h-2 w-2 rounded-full bg-gray-600"></div>
    </div>
  );
};
