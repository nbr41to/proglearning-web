import type { FC } from 'react';

import { LeafIcon } from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

export const Completed: FC = () => {
  const router = useRouter();

  return (
    <SignboardContainer fill>
      <div className="mx-auto w-fit space-y-4 py-4 px-6">
        <p className=" leading-loose">
          お申し込みありがとうございます🎉 登録の手続きが完了いたしました。
          登録いただいたメールアドレスにSlackの招待メールが届きます。
          （3日以上経過してもメールが来ない場合はお手数ですが、お問い合わせページよりご連絡ください。）
          Slackのインストールがまだお済みでない方は
          <a
            href="https://slack.com/intl/ja-jp/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          からインストールすることをおすすめいたします。
        </p>
        <div className="mx-auto w-fit">
          <Button
            onClick={() => router.push('/getting-started')}
            leftIcon={<LeafIcon size={18} />}
          >
            始める
          </Button>
        </div>
      </div>
    </SignboardContainer>
  );
};
