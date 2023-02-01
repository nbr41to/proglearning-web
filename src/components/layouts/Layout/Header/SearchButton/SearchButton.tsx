import type { FC } from 'react';

import { SearchIcon } from '@/common/icons';
import { Kbd } from '@mantine/core';
import { useOs } from '@mantine/hooks';

type Props = {
  onClick: () => void;
};
export const SearchButton: FC<Props> = ({ onClick }) => {
  const os = useOs();

  return (
    <div
      className="flex h-10 cursor-pointer items-center gap-2 rounded-full bg-gray-100 px-4 text-sm font-bold hover:brightness-95"
      onClick={onClick}
    >
      <SearchIcon size={18} />
      Search
      <Kbd className="whitespace-nowrap border-slate-400 py-px text-[10px]">
        {os === 'windows' ? 'Ctrl' : '⌘'} + K
      </Kbd>
    </div>
  );
};
