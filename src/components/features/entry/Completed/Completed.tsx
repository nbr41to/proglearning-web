import type { FC } from 'react';

import { SignboardContainer } from '@/common/SignboardContainer';

export const Completed: FC = () => {
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
      </div>
    </SignboardContainer>
  );
};
