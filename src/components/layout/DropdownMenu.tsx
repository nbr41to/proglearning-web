import type { FC } from 'react';

import {
  BookOpenIcon,
  CaretDownIcon,
  DashboardIcon,
  LeafIcon,
  LogoutIcon,
  QuillPenIcon,
  SettingIcon,
} from '@/common/icons';
import { useAccountStatus } from '@/hooks/useAccountStatus';
import { signOut } from '@/utils/supabase/auth';
import { Avatar, clsx, Menu } from '@mantine/core';
import { useRouter } from 'next/router';

type Props = {
  email: string;
  avatarUrl: string;
};
export const DropdownMenu: FC<Props> = ({ email, avatarUrl }) => {
  const router = useRouter();
  const { data: userStatus } = useAccountStatus();
  const isCheckedOut = userStatus?.checked_out;

  return (
    <Menu
      shadow="md"
      width={200}
      withArrow
      arrowSize={10}
      arrowRadius={2}
      arrowPosition="center"
      transition="pop-top-right"
      position="bottom-end"
    >
      <Menu.Target>
        <div
          className={clsx(
            'flex cursor-pointer items-center gap-1 rounded-md py-1.5 px-4',
            'transition-colors duration-200 hover:bg-gray-200'
          )}
        >
          <Avatar
            src={avatarUrl}
            size={32}
            radius={100}
            className="ml-auto cursor-pointer"
          />
          <CaretDownIcon size={14} />
        </div>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{email}</Menu.Label>
        <Menu.Item
          icon={<LeafIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push('/getting-started')}
        >
          Getting Started
        </Menu.Item>
        <Menu.Item
          icon={<DashboardIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push(`/dashboard`)}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          icon={<BookOpenIcon size={16} />}
          onClick={() => router.push('/lessons')}
        >
          Lessons
        </Menu.Item>
        <Menu.Item
          icon={<QuillPenIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push(`/output`)}
        >
          Output
        </Menu.Item>
        <Menu.Item
          icon={<SettingIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push(`/setting`)}
        >
          Setting
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item icon={<LogoutIcon size={16} />} onClick={signOut}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
