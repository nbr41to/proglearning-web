import type { FC, ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="">
      <header className="fixed z-50 flex w-full items-center gap-4 bg-white/50 py-2 px-4 shadow backdrop-blur">
        <Link className="a-reset flex items-center gap-2" href="/">
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
          <Link href="/">Home</Link>
          <Link href="/test">Test</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/entry">Entry</Link>
          <Link href="/dashboard">dashboard</Link>
          <Link href="/learning">learning</Link>
          <Link href="/output">output</Link>
          <Link href="/user-id-123">user-id-123</Link>
        </nav>
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
            ゆるく始めるプログラミング学習コミュニティ
          </div>
        </div>
        <div className="py-2 text-center text-xs font-bold text-slate-200">
          © 2021 progLearning
        </div>
      </footer>
    </div>
  );
};
