import type { Status } from '@prisma/client';
import type { User } from '@supabase/auth-helpers-react';
import type { FC } from 'react';

import { DropdownMenu } from './DropdownMenu';
import { SearchButton } from './SearchButton';
import { BookIcon, DetailIcon, MailIcon } from '@/components/common/icons';
import { NotificationAnimatedButton } from '@/components/layouts/Layout/Header/NotificationButton';
import { Button, clsx, Tooltip, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  user: User | null;
  status?: Status | null;
  onClickSearchButton: () => void;
  onSignOut: () => void;
};

export const Header: FC<Props> = ({
  user,
  status,
  onClickSearchButton,
  onSignOut,
}) => {
  const router = useRouter();
  const isNotification = false;

  return (
    <header className="fixed z-40 flex w-full items-center justify-between gap-4 bg-white/50 py-2 px-4 shadow backdrop-blur sp:justify-center">
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

        <nav className="flex gap-4 sp:hidden">
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
          <Tooltip label="coming soon">
            <div className="mt-2 flex cursor-not-allowed items-center gap-2 font-baloo text-xl text-gray-400">
              <BookIcon size={20} />
              Lessons
            </div>
            {/* <Link
              href="/lessons"
              className={clsx(
                'a-reset mt-2 flex items-center gap-2 font-baloo text-xl',
                'transition-color transition-transform hover:-translate-y-0.5 hover:text-gray-700 hover:drop-shadow-sm'
              )}
            >
              <BookIcon size={20} />
              Lessons
            </Link> */}
          </Tooltip>
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

      {user && status ? (
        <div className="flex items-center gap-4">
          <SearchButton onClick={onClickSearchButton} />
          <NotificationAnimatedButton isNotification={isNotification} />
          <DropdownMenu
            email={user.email || ''}
            avatarUrl={user.user_metadata.avatar_url}
            role={status.role}
            onSignOut={onSignOut}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4 sp:hidden">
          <UnstyledButton
            className="text-sm"
            onClick={() => router.push('/login')}
          >
            ????????????
          </UnstyledButton>
          <Button variant="gradient" onClick={() => router.push('/entry')}>
            ????????????
          </Button>
        </div>
      )}
    </header>
  );
};
