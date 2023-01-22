import type { FC } from 'react';

import { SearchIcon } from '@/common/icons';
import { Kbd } from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { useSpotlight } from '@mantine/spotlight';

export const SearchButton: FC = () => {
  const spotlight = useSpotlight();
  const os = useOs();

  return (
    <div
      className="flex h-9 cursor-pointer items-center gap-2 rounded-full border border-solid border-gray-400 bg-white px-4 text-xs font-bold hover:brightness-95"
      onClick={() => spotlight.openSpotlight()}
    >
      <SearchIcon size={16} />
      Search
      <Kbd className="border-slate-400 py-px text-[10px]">
        {os === 'windows' ? 'Ctrl' : '⌘'} + K
      </Kbd>
    </div>
  );
};
