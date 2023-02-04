import type { FC } from 'react';

import { LeafIcon } from '@/common/icons';
import { SignboardContainer } from '@/common/SignboardContainer/SignboardContainer';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';

export const Completed: FC = () => {
  const router = useRouter();

  return (
    <SignboardContainer>
      <div className="mx-auto w-fit space-y-4 py-8 px-12">
        <p>
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
