import type { Status } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  user: User | null;
  status?: Status | null;
  onClickSearchButton: () => void;
  onSignOut: () => void;
};

export const Layout: FC<Props> = ({
  children,
  user,
  status,
  onClickSearchButton,
  onSignOut,
}) => {
  return (
    <>
      <Header
        user={user}
        status={status}
        onClickSearchButton={onClickSearchButton}
        onSignOut={onSignOut}
      />
      <main className="relative z-10 mb-60 min-h-[calc(100vh-32px)] w-full bg-white pt-20 sp:mb-40">
        <div className="mx-auto max-w-[1280px]">{children}</div>
      </main>
      <Footer status={status} />
    </>
  );
};
