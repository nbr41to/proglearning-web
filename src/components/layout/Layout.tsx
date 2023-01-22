import type { User } from '@supabase/supabase-js';
import type { FC, ReactNode } from 'react';

import {
  BookIcon,
  CaretDownIcon,
  DetailIcon,
  LogoutIcon,
  MailIcon,
  SearchIcon,
} from '@/common/icons';
import { useAccountStatus } from '@/hooks/useAccountStatus';
import { signOut } from '@/utils/supabase/auth';
import { Avatar, Button, clsx, Menu } from '@mantine/core';
import { useUser } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
  user?: User | null;
};

export const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const user = useUser();
  const { data: userStatus } = useAccountStatus();
  const isCheckedOut = userStatus?.checked_out;

  return (
    <div className="">
      <header className="fixed z-50 flex w-full items-center justify-between gap-4 bg-white/50 py-2 px-4 shadow backdrop-blur">
        <div className="flex items-center gap-8">
          <Link
            className="a-reset flex items-center gap-2 transition-shadow hover:text-gray-700 hover:drop-shadow"
            href="/"
          >
            <Image
              src="/logo.png"
              alt="site logo"
              width={48}
              height={48}
              priority
            />
            <h1 className="font-baloo">progLearning</h1>
          </Link>

          <nav className="flex gap-4">
            <Link
              href="/about"
              className={clsx(
                'a-reset mt-2 flex items-center gap-2 font-baloo text-xl',
                'transition-color transition-transform hover:-translate-y-0.5 hover:text-gray-700 hover:drop-shadow-sm'
              )}
            >
              <DetailIcon size={22} />
              About
            </Link>
            <Link
              href="/lessons"
              className={clsx(
                'a-reset mt-2 flex items-center gap-2 font-baloo text-xl',
                'transition-color transition-transform hover:-translate-y-0.5 hover:text-gray-700 hover:drop-shadow-sm'
              )}
            >
              <BookIcon size={20} />
              Lessons
            </Link>
            <Link
              href="/contact"
              className={clsx(
                'a-reset mt-2 flex items-center gap-2 font-baloo text-xl',
                'transition-color transition-transform hover:-translate-y-0.5 hover:text-gray-700 hover:drop-shadow-sm'
              )}
            >
              <MailIcon size={22} />
              Contact
            </Link>
          </nav>
        </div>

        {user ? (
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
                  src={user.user_metadata.avatar_url}
                  size={32}
                  radius={100}
                  className="ml-auto cursor-pointer"
                />
                <CaretDownIcon size={14} />
              </div>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>{user.email}</Menu.Label>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                disabled={!isCheckedOut}
                onClick={() => router.push('/getting-started')}
              >
                Getting Started
              </Menu.Item>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                onClick={() => router.push('/lessons')}
              >
                Lessons
              </Menu.Item>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                disabled={!isCheckedOut}
                onClick={() => router.push(`/dashboard`)}
              >
                Dashboard
              </Menu.Item>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                disabled={!isCheckedOut}
              >
                Output
              </Menu.Item>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                disabled={!isCheckedOut}
                rightSection={<div>⌘K</div>}
              >
                Search
              </Menu.Item>
              <Menu.Item
                icon={<SearchIcon size={14} />}
                disabled={!isCheckedOut}
              >
                Setting
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item icon={<LogoutIcon size={16} />} onClick={signOut}>
                ログアウト
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Button onClick={() => router.push('entry')}>登録する</Button>
        )}
      </header>

      <main className="relative z-10 mb-36 min-h-[calc(100vh-32px)] w-full bg-white pt-20">
        <div className=" mx-auto max-w-[1280px]">{children}</div>
      </main>

      <footer className="fixed bottom-0 left-0 flex h-36 w-full flex-col justify-between bg-gray-800 px-8 text-white">
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="site logo"
              width={36}
              height={36}
              sizes="265px"
              priority
            />
            <Link href="/" className="a-reset font-baloo text-[26px]">
              progLearning
            </Link>
          </div>
          <div className="mt-2 text-xs">
            ゆるく始めるプログラミング学習コミュニティ。
          </div>
        </div>
        <div className="py-2 text-center text-xs font-bold text-slate-200">
          © 2021 progLearning
        </div>
      </footer>
    </div>
  );
};
