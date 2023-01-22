import type { User } from '@supabase/supabase-js';
import type { FC, ReactNode } from 'react';

import { BookIcon, DetailIcon, MailIcon } from '@/common/icons';
import { DropdownMenu } from '@/layout/DropdownMenu';
import { SearchButton } from '@/layout/SearchButton';
import { Button, clsx, UnstyledButton } from '@mantine/core';
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
          <div className="flex items-center gap-4">
            <SearchButton />
            <DropdownMenu
              email={user.email || ''}
              avatarUrl={user.user_metadata.avatar_url}
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
