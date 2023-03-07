import type { FC } from 'react';

import Image from 'next/image';

export const Maintenance: FC = () => {
  return (
    <>
      <header className="fixed z-40 flex w-full bg-white/50 py-2 px-4 shadow backdrop-blur sp:justify-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="site logo"
            width={48}
            height={48}
            priority
          />
          <h1 className="font-baloo">progLearning</h1>
        </div>
      </header>

      <main className="relative z-10 mb-60 w-full bg-white pt-20 sp:mb-40">
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">メンテナンス中 🚧</h1>
          <div>
            <p className="mt-6 text-gray-500">
              申し訳ありません。現在メンテナンス中です。
            </p>
            <p className="text-gray-500">（2023年4月リリース予定）</p>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 flex h-40 w-full flex-col justify-between bg-gray-800 px-8 pt-6 text-white sp:h-40">
        <div className="flex gap-10">
          <div>
            <div className="a-reset flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="site logo"
                width={36}
                height={36}
                sizes="265px"
                priority
              />
              <div className="font-baloo text-[26px]">progLearning</div>
            </div>
            <div className="mt-2 text-xs">
              ゆるく始めるプログラミング学習コミュニティ。
            </div>
          </div>
        </div>
        <div className="py-2 text-center text-xs font-bold text-slate-200">
          © 2021 progLearning
        </div>
      </footer>
    </>
  );
};
