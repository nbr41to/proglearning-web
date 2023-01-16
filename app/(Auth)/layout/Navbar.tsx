import type { FC } from 'react';

import { HomeIcon } from '@/common/icons';
import { Avatar, Navbar as MantineNavbar } from '@mantine/core';

type Props = {
  isOpen: boolean;
};

export const Navbar: FC<Props> = ({ isOpen }) => {
  return (
    <MantineNavbar
      width={{ base: 280 }}
      hidden
      hiddenBreakpoint={isOpen ? undefined : 9999999}
    >
      <div className="flex h-full flex-col justify-between p-4">
        <div className="space-y-4">
          <div className="flex items-center">
            <HomeIcon />
            メニュー
          </div>
          <div className="flex items-center">
            <HomeIcon />
            メニュー
          </div>
          <div className="flex items-center">
            <HomeIcon />
            メニュー
          </div>
          <div className="flex items-center">
            <HomeIcon />
            メニュー
          </div>
        </div>

        <div className="flex w-full">
          <Avatar />
          <div>
            <div>nbr.41to@gmail.com</div>
            <div>nobyukikobayashi</div>
          </div>
        </div>
      </div>
    </MantineNavbar>
  );
};
