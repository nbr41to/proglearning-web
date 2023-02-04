import type { NextPage } from 'next';

import { Button } from '@mantine/core';

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
    </div>
  );
};

export default DashboardPage;
