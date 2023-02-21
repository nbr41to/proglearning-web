import type { ReactNode } from 'react';

import {
  BookIcon,
  CheckIcon,
  DashboardIcon,
  LeafIcon,
  MailIcon,
  SearchIcon,
  SettingIcon,
  PomodoroIcon,
} from '@/components/common/icons';
import { useMeStatus } from '@/hooks/supabaseHook/useMeStatus';
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const SpotlightProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: userStatus } = useMeStatus();
  const disabled = !userStatus?.checked_out;

  const actions = useMemo(
    () => [
      {
        title: 'Dashboard',
        description: 'ダッシュボード',
        icon: <DashboardIcon size={26} />,
        disabled,
        onTrigger: () => router.push('/dashboard'),
      },
      {
        title: 'Getting Started',
        description: 'progLearningの使い方を学ぶ',
        icon: <LeafIcon size={26} />,
        onTrigger: () => router.push('/getting-started'),
        disabled,
      },
      {
        title: 'Lessons',
        description: '教材一覧',
        icon: <BookIcon size={26} />,
        onTrigger: () => router.push('/lessons'),
      },
      // {
      //   title: 'Output',
      //   description: '勉強したことをアウトプットできます',
      //   icon: <QuillPenIcon size={26} />,
      //   disabled: true,
      //   // disabled,
      //   onTrigger: () => router.push('/output'),
      // },
      {
        title: 'Your Todo-app',
        description: 'TODOリスト',
        icon: <CheckIcon size={26} />,
        onTrigger: () => router.push('/todo-app'),
      },
      {
        title: 'Pomodoro Timer',
        description: 'ポモドーロ・テクニックで集中力を高める',
        icon: <PomodoroIcon size={26} />,
        onTrigger: () => router.push('/pomodoro-timer'),
      },
      {
        title: 'Contact',
        description: 'お問い合わせはこちら',
        icon: <MailIcon size={26} />,
        onTrigger: () => router.push('/contact'),
      },
      {
        title: 'Setting',
        description: 'マイページ',
        icon: <SettingIcon size={26} />,
        onTrigger: () => router.push('/setting'),
        disabled,
      },
    ],
    [router, disabled]
  );

  return (
    <MantineSpotlightProvider
      disabled={disabled}
      shortcut="mod + k"
      actions={actions}
      limit={20}
      searchIcon={<SearchIcon size={18} />}
      searchPlaceholder="Search..."
      nothingFoundMessage="Nothing found..."
      withinPortal
      highlightQuery
      overlayOpacity={0.3}
      styles={{
        spotlight: {
          maxHeight: '60vh',
        },
      }}
    >
      {children}
    </MantineSpotlightProvider>
  );
};
