import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
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
  );
};
