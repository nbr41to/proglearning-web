import {
  GitHubIcon,
  ProfileIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@/components/common/icons';
import Image from 'next/image';

export const Introduction = () => {
  return (
    <div className="py-10 px-6 sp:py-6">
      <h2 className="mb-6 whitespace-pre text-center text-2xl font-bold sp:mb-4 sp:text-lg">
        教員からフリーランスの
        <wbr />
        Webエンジニアへなった私が、
        <wbr />
        そのメソッドを隠すことなく提供します
      </h2>
      <p className="m-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base sm:leading-relaxed">
        はじめまして管理人です。教員を退職してから半年でフリーランスのWebエンジニアになった個人が趣味でプログラミング学習を支援しております。難しいと思われがちなプログラミング学習を、わかりやすく解説したり、挫折しないような環境作りをサポートすることで、一歩踏み出した人を応援しています。
      </p>
      <div className="flex flex-col-reverse items-center justify-center space-x-4 text-left sm:flex-row">
        <div className="text-center sm:text-right">
          <div className="text-lg font-bold sm:text-xl">Nobuyuki Kobayashi</div>
          <div className="mt-1 text-xs text-slate-500 sm:text-sm">
            学校の先生 → フリーランスWebエンジニア
          </div>
        </div>
        <Image
          className="rounded-full"
          src="/profile.png"
          alt="nob photo"
          width={64}
          height={64}
          priority
        />
      </div>
      <div className="mx-auto flex w-fit items-center gap-3 sp:mt-2">
        <a
          className="text-gray-800 transition-colors hover:text-gray-600"
          href="https://www.nbr41.com/profile"
          target="_blank"
          rel="noreferrer"
        >
          <ProfileIcon size={18} />
        </a>
        <a
          className="text-gray-800 transition-colors hover:text-gray-600"
          href="https://twitter.com/Knob_nbr41to"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon size={18} />
        </a>
        <a
          className="text-gray-800 transition-colors hover:text-gray-600"
          href="https://github.com/nbr41to"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon size={18} />
        </a>
        <a
          className="text-gray-800 transition-colors hover:text-gray-600"
          href="https://www.youtube.com/channel/UCPcjWvYIfvqGPP4x30kEkMA"
          target="_blank"
          rel="noreferrer"
        >
          <YouTubeIcon size={18} />
        </a>
      </div>
    </div>
  );
};
