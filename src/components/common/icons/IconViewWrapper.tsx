import type { FC, ReactNode } from 'react';

import { useClipboard } from '@mantine/hooks';

type Props = {
  name: string;
  children: ReactNode;
};

/* Storybookでのみ使用 */
export const IconWrapper: FC<Props> = ({ name, children }) => {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <div
      className="flex cursor-pointer flex-col items-center gap-1"
      onClick={() => clipboard.copy(name)}
    >
      {children}
      <p className="text-xs text-gray-500">{name.replace('Icon', '')}</p>
    </div>
  );
};
