import type { Role } from '@prisma/client';
import type { FC } from 'react';

import {
  BookOpenIcon,
  CaretDownIcon,
  DashboardIcon,
  LeafIcon,
  ListIcon,
  LogoutIcon,
  QuillPenIcon,
  SettingIcon,
  PomodoroIcon,
} from '@/components/common/icons';
import { Avatar, clsx, Menu } from '@mantine/core';
import { useRouter } from 'next/router';

type Props = {
  email: string;
  avatarUrl: string;
  role: Role;
  onSignOut: () => void;
};

export const DropdownMenu: FC<Props> = ({
  email,
  avatarUrl,
  role,
  onSignOut,
}) => {
  const router = useRouter();
  const isAdmin = role === 'admin';
  const isCheckedOut = role === 'admin' || role === 'closer';

  return (
    <Menu
      shadow="md"
      width={240}
      withArrow
      arrowSize={10}
      arrowRadius={2}
      arrowPosition="center"
      transitionProps={{ transition: 'pop-top-right', duration: 100 }}
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
          icon={<DashboardIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push(`/dashboard`)}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          icon={<LeafIcon size={16} />}
          disabled={!isCheckedOut}
          onClick={() => router.push('/getting-started')}
        >
          Getting Started
        </Menu.Item>
        <Menu.Item
          icon={<BookOpenIcon size={16} />}
          disabled={true}
          // onClick={() => router.push('/lessons')}
        >
          Lessons (Coming Soon)
        </Menu.Item>
        <Menu.Item
          icon={<QuillPenIcon size={16} />}
          disabled={true}
          // onClick={() => router.push(`/output`)}
        >
          Output (Coming Soon)
        </Menu.Item>
        <Menu.Item
          icon={<PomodoroIcon size={16} />}
          disabled={true}
          // onClick={() => router.push('/pomodoro')}
        >
          Pomodoro (Coming Soon)
        </Menu.Item>
        <Menu.Item
          icon={<SettingIcon size={16} />}
          onClick={() => router.push(`/setting`)}
        >
          Setting
        </Menu.Item>
        {isAdmin && (
          <>
            <Menu.Divider />
            <Menu.Label>Admin</Menu.Label>
            <Menu.Item
              icon={<ListIcon size={16} />}
              onClick={() => router.push(`/admin/accounts`)}
            >
              Accounts
            </Menu.Item>
          </>
        )}
        <Menu.Divider />
        <Menu.Item icon={<LogoutIcon size={16} />} onClick={onSignOut}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
