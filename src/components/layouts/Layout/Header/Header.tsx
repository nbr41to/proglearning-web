import type { Account } from '@prisma/client';
import type { User } from '@supabase/auth-helpers-react';
import type { FC } from 'react';

import { DropdownMenu } from './DropdownMenu';
import { SearchButton } from './SearchButton';
import { BookIcon, DetailIcon, MailIcon } from '@/common/icons';
import { Button, clsx, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  user: User | null;
  account?: Account | null;
  onClickSearchButton: () => void;
  onSignOut: () => void;
};

export const Header: FC<Props> = ({
  user,
  account,
  onClickSearchButton,
  onSignOut,
}) => {
  const router = useRouter();

  return (
    <header className="fixed z-40 flex w-full items-center justify-between gap-4 bg-white/50 py-2 px-4 shadow backdrop-blur">
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

      {user && account ? (
        <div className="flex items-center gap-4">
          <SearchButton onClick={onClickSearchButton} />
          <DropdownMenu
            email={user.email || ''}
            avatarUrl={user.user_metadata.avatar_url}
            role={account.role}
            onSignOut={onSignOut}
          />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <UnstyledButton
            className="text-sm"
            onClick={() => router.push('/login')}
          >
            ログイン
          </UnstyledButton>
          <Button onClick={() => router.push('/entry')}>登録する</Button>
        </div>
      )}
    </header>
  );
};
