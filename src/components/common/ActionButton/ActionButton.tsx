import type { FC, ReactNode } from 'react';

import { ChevronRightIcon } from '@/components/common/icons';
import { clsx } from '@mantine/core';

type Props = JSX.IntrinsicElements['button'] & {
  label: string;
  icon: ReactNode;
  fill?: boolean;
};

export const ActionButton: FC<Props> = ({
  label,
  icon,
  fill = false,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'relative cursor-pointer rounded-sm border-0 bg-gray-100 py-4 pl-6 pr-8 shadow',
        'origin-left transition hover:rotate-1 hover:bg-gray-200 active:bg-gray-300',
        fill ? 'w-full' : 'w-fit'
      )}
      {...rest}
    >
      <div className="flex w-full items-center gap-2 font-bold">
        {icon}
        {label}
      </div>
      <ChevronRightIcon
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
        size={12}
      />
    </button>
  );
};
