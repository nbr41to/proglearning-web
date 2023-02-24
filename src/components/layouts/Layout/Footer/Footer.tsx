import type { FC } from 'react';

import { LoginCheckWrapper } from '@/components/common/LoginCheckWrapper';
import { siteMapPaths } from '@/utils/menu';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex h-60 w-full flex-col justify-between bg-gray-800 px-8 pt-6 text-white">
      <div className="flex gap-10">
        <div>
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

        <div className="grid max-w-md flex-grow grid-cols-3">
          <div className="space-y-2">
            <div className="py-1 text-sm">- General -</div>
            {siteMapPaths.general.map((path) => (
              <Link
                key={path.path}
                className="a-reset block w-fit cursor-pointer text-xs font-bold hover:underline"
                href={path.path}
              >
                {path.name}
              </Link>
            ))}
          </div>
          <div className="space-y-2">
            <div className="py-1 text-sm">- User -</div>
            {siteMapPaths.user.map((path) => (
              <LoginCheckWrapper key={path.path}>
                <Link
                  className="a-reset block w-fit cursor-pointer text-xs font-bold hover:underline"
                  href={path.path}
                >
                  {path.name}
                </Link>
              </LoginCheckWrapper>
            ))}
          </div>
          <div className="space-y-2">
            <div className="py-1 text-sm">- Auth -</div>
            {siteMapPaths.auth.map((path) => (
              <Link
                key={path.path}
                className="a-reset block w-fit cursor-pointer text-xs font-bold hover:underline"
                href={path.path}
              >
                {path.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-2 text-center text-xs font-bold text-slate-200">
        © 2021 progLearning
      </div>
    </footer>
  );
};
