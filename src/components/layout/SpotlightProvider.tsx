import type { ReactNode } from 'react';

import {
  BookIcon,
  DashboardIcon,
  LeafIcon,
  MailIcon,
  QuillPenIcon,
  SearchIcon,
  SettingIcon,
} from '@/components/common/icons';
import { useAccountStatus } from '@/hooks/useAccountStatus';
import { SpotlightProvider as MantineSpotlightProvider } from '@mantine/spotlight';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const SpotlightProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { data: userStatus } = useAccountStatus();
  const disabled = !userStatus?.checked_out;

  const actions = useMemo(
    () => [
      {
        title: 'Getting Started',
        description: 'progLearningの使い方を学ぶ',
        icon: <LeafIcon size={26} />,
        onTrigger: () => router.push('/getting-started'),
        disabled,
      },
      {
        title: 'Dashboard',
        description: 'ダッシュボード',
        icon: <DashboardIcon size={26} />,
        onTrigger: () => router.push('/dashboard'),
        disabled,
      },
      {
        title: 'Lessons',
        description: '教材一覧',
        icon: <BookIcon size={26} />,
        onTrigger: () => router.push('/lessons'),
      },
      {
        title: 'Output',
        description: '勉強したことをアウトプットできます',
        icon: <QuillPenIcon size={26} />,
        onTrigger: () => router.push('/output'),
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
