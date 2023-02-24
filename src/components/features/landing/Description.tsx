import { SearchIcon, ShakeIcon } from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

export const Description = () => {
  const router = useRouter();

  return (
    <SignboardContainer fill>
      <div className="py-4">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-xl">プログラミングの学習をサポートします</h2>
          <ShakeIcon size={20} />
        </div>

        <div className="mt-6">
          <p className="text-center text-gray-600">
            <span className="px-0.5 font-bold">progLearning</span>
            はプログラミングを学習したい人にとって
            <span className="px-0.5 font-bold">破格の学習コミュニティ</span>
            です。
          </p>

          <ul className="mx-auto mt-6 w-fit space-y-1 text-lg">
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
        <div className="ml-auto -mt-8 w-fit">
          <Button
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
