import type { FC } from 'react';

import { SearchIcon } from '@/common/icons';
import { Avatar, Burger, Header as MantineHeader, Menu } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Header: FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <MantineHeader height={60} className="flex items-center gap-2 px-4">
      {/* BURGER */}
      <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {/* LOGO */}
      <Link href="/dashboard" className="a-reset flex items-center gap-2">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="m-0 font-baloo text-3xl">progLearning</h1>
      </Link>

      {/* USER MENU */}
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar size={40} radius={100} className="ml-auto cursor-pointer" />
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<SearchIcon size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<SearchIcon size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<SearchIcon size={14} />}>Gallery</Menu.Item>
          <Menu.Item
            icon={<SearchIcon size={14} />}
            rightSection={<div>⌘K</div>}
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>

          <Menu.Item icon={<SearchIcon size={14} />}>
            Transfer my data
          </Menu.Item>
          <Menu.Item color="red" icon={<SearchIcon size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </MantineHeader>
  );
};
