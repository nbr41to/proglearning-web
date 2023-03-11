import type { Account, Profile, Status } from '@prisma/client';
import type { FC } from 'react';

import { ActionButton } from '@/components/common/ActionButton';
import {
  BookIcon,
  CheckIcon,
  PomodoroIcon,
  ProfileIcon,
} from '@/components/common/icons';
import { PageTitle } from '@/components/common/PageTitle';
import { GitHubGlass } from '@/components/features/dashboard/GitHubGlass/GitHubGlass';
import { TutorialSteps } from '@/components/features/dashboard/TutorialSteps';
import { CurrentGoal } from '@/components/features/setting/CurrentGoal/CurrentGoal';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  return (
    <div className="w-main mx-auto px-6">
      <PageTitle title="Dashboard" />
      <div className="text-center">
        ようこそ！<span className="px-1 font-bold">{profile.name}</span>さん
      </div>

      <div className="grid place-content-center">
        <GitHubGlass githubId={account?.github_id} />
      </div>

      <div>
        <CurrentGoal goal={profile.current_goal} onSubmit={onSubmitGoal} />
      </div>

      <div className="mt-6 flex gap-4">
        <div className="w-fit">
          <TutorialSteps
            currentStep={status.tutorial_step}
            onStepClick={onStepClick}
            step2Disabled={!status.checked_out}
            step4Disabled={!profile.introduction || !profile.current_goal}
            step5Disabled={true}
          />
        </div>

        <div className="flex flex-grow flex-col gap-4">
          {!profile.introduction && (
            <ActionButton
              label="自己紹介を設定する"
              icon={<ProfileIcon />}
              fill
              onClick={() => router.push('/setting')}
            />
          )}
          <ActionButton
            label="Lesson を受ける"
            icon={<BookIcon />}
            disabled
            fill
            onClick={() => router.push('/lessons')}
          />
          <ActionButton
            label="ポモドーロする"
            disabled
            icon={<PomodoroIcon />}
            fill
            onClick={() => router.push('/pomodoro')}
          />
          <ActionButton
            label="TODO アプリを作る"
            disabled
            icon={<CheckIcon />}
            fill
            onClick={() => router.push('/todo-app')}
          />
        </div>
      </div>

      <div>最近見たLessons</div>
    </div>
  );
};
