import type { Account, Profile, Status } from '@prisma/client';
import type { FC } from 'react';

import { PageTitle } from '@/components/common/PageTitle';
import { SignboardContainer } from '@/components/common/SignboardContainer';
import { GitHubGlass } from '@/components/features/dashboard/GitHubGlass/GitHubGlass';
import { TutorialSteps } from '@/components/features/dashboard/TutorialSteps';
import { CurrentGoal } from '@/components/features/setting/CurrentGoal/CurrentGoal';
import { Button } from '@mantine/core';

type Props = {
  account: Account;
  status: Status;
  profile: Profile;
  onStepClick: (step: number) => Promise<void>;
  onSubmitGoal: (param: string) => Promise<void>;
};

export const DashboardTemplate: FC<Props> = ({
  account,
  status,
  profile,
  onStepClick,
  onSubmitGoal,
}) => {
  return (
    <div className="w-main mx-auto space-y-4 px-6">
      <PageTitle title="Dashboard" />
      <div className="text-center">
        ようこそ！<span className="px-1 font-bold">{profile.name}</span>さん
      </div>

      <div className="grid place-content-center">
        <GitHubGlass githubId={account?.github_id} />
        <CurrentGoal goal={profile.current_goal} onSubmit={onSubmitGoal} />
      </div>

      <div className="flex gap-4">
        <div className="w-fit">
          <TutorialSteps
            currentStep={status.tutorial_step}
            onStepClick={onStepClick}
            step2Disabled={!status.checked_out}
            step4Disabled={!profile.introduction || !profile.current_goal}
            step5Disabled={true}
          />
        </div>

        <div>
          <SignboardContainer>
            <Button>アウトプット</Button>
            <Button>アカウント設定</Button>
            <Button>Lessons</Button>
            <Button>ロードマップを見る</Button>
          </SignboardContainer>
        </div>
      </div>

      <div>最近見たLessons</div>
    </div>
  );
};
