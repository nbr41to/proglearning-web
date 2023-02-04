import type { Session } from '@supabase/auth-helpers-nextjs';
import type { FC, ReactNode } from 'react';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider as SupabaseSessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

type Props = {
  children: ReactNode;
  initialSession: Session;
};

export const SessionContextProvider: FC<Props> = ({
  children,
  initialSession,
}) => {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SupabaseSessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={initialSession}
    >
      {children}
    </SupabaseSessionContextProvider>
  );
};
