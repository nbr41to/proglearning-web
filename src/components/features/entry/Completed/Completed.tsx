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
        <p className=" text-center leading-loose">
          お申し込みありがとうございます🎉
          <br />
          ご登録のお手続きが完了いたしました。後ほど、ご登録いただいたメールアドレス宛にSlackの招待メールを送らせていただきます。（3日以上経過してもメールが来ない場合はお手数ですが、お問い合わせページよりご連絡ください。）
          Slackのインストールがまだお済みでない方は
          <a
            href="https://slack.com/intl/ja-jp/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          からインストールをお願いいたします。
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
