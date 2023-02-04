import type { NextPage } from 'next';

import { Button, Stepper } from '@mantine/core';

const DashboardPage: NextPage = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      {/* <div>ようこそ！{account.profile.name}さん</div> */}
      <div>今月の目標[編集]</div>
      <div>チュートリアルの達成状況</div>
      <Button>アウトプット</Button>
      <Button>アカウント設定</Button>
      <Button>Lessons</Button>
      <Button>ロードマップを見る</Button>
      <div>最近見たLessons</div>

      <Stepper size="sm" active={1} orientation="vertical">
        <Stepper.Step
          label="1. アカウントの作成"
          description="Create an account"
        />
        <Stepper.Step
          label="2. クレジットカードの登録"
          description="Verify email"
        />
        <Stepper.Step
          label="3. Getting Startedを読む"
          description="Get full access"
        />
        <Stepper.Step
          label="4. 目標と自己紹介を書く"
          description="Get full access"
        />
        <Stepper.Step
          label="5. Lessonsから学習を開始する"
          description="Get full access"
        />
      </Stepper>
    </div>
  );
};

export default DashboardPage;
