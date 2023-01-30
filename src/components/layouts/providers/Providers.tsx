import type { Session } from '@supabase/auth-helpers-nextjs';
import type { FC, ReactNode } from 'react';

import { SessionContextProvider } from './SessionContextProvider';
import { SpotlightProvider } from './SpotlightProvider';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import { RecoilRoot } from 'recoil';

type Props = {
  children: ReactNode;
  initialSession: Session;
};

export const Providers: FC<Props> = ({ children, initialSession }) => {
  return (
    <SessionContextProvider initialSession={initialSession}>
      <RecoilRoot>
        <NotificationsProvider position="top-center">
          <SpotlightProvider>
            <ModalsProvider>{children}</ModalsProvider>
          </SpotlightProvider>
        </NotificationsProvider>
      </RecoilRoot>
    </SessionContextProvider>
  );
};
