import { SearchIcon, ShakeIcon } from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

export const Description = () => {
  const router = useRouter();

  return (
    <SignboardContainer fill>
      <div className="py-4">
        <div className="flex items-center justify-center gap-2 sp:flex-col-reverse sp:gap-4">
          <h2 className="text-xl sp:text-base">
            プログラミングの学習をサポートします
          </h2>
          <ShakeIcon className="text-xl sp:text-3xl" />
        </div>

        <div className="mt-6 sp:mt-3">
          <p className="whitespace-pre text-center text-gray-600 sp:text-xs">
            <span className="px-0.5 font-bold">progLearning</span>
            はプログラミングを学習したい人にとって
            <wbr />
            <span className="px-0.5 font-bold">破格の学習コミュニティ</span>
            です。
          </p>

          <ul className="mx-auto mt-6 w-fit space-y-1 text-lg sp:mt-3 sp:text-base">
            <li>現役エンジニアに質問し放題</li>
            <li>実務レベルの共同開発が経験可能</li>
            <li>
              流行りのReact や TypeScript を学習するためのアウトラインを提供
            </li>
            <li>未経験からのエンジニア転職をサポート</li>
            <li>自然と技術のトレンドのキャッチアップができる</li>
            <li>顔出しは任意、匿名の参加でOK</li>
          </ul>
        </div>
        <div className="ml-auto -mt-8 w-fit sp:mt-6 sp:w-full">
          <Button
            className="sp:w-full"
            color="orange"
            rightIcon={<SearchIcon size={20} />}
            onClick={() => router.push('/about')}
          >
            もっと詳しく
          </Button>
        </div>
      </div>
    </SignboardContainer>
  );
};
