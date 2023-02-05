import type { FC, ReactNode } from 'react';

import { clsx } from '@mantine/core';

type Props = {
  fill?: boolean;
  children: ReactNode;
};

export const SignboardContainer: FC<Props> = ({ fill = false, children }) => {
  return (
    <div
      className={clsx(
        'relative rounded-none border-0 bg-slate-100 py-6 px-8 shadow sm:rounded-lg sm:border',
        fill ? 'w-full' : 'w-fit'
      )}
    >
      {children}
      <div className="absolute top-3 left-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute bottom-3 left-3 h-2 w-2 rounded-full bg-gray-600"></div>
      <div className="absolute right-3 bottom-3 h-2 w-2 rounded-full bg-gray-600"></div>
    </div>
  );
};
