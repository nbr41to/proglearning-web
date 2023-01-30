import type { Account } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  user: User | null;
  account?: Account | null;
  onClickSearchButton: () => void;
  onSignOut: () => void;
};

export const Layout: FC<Props> = ({
  children,
  user,
  account,
  onClickSearchButton,
  onSignOut,
}) => {
  return (
    <>
      <Header
        user={user}
        account={account}
        onClickSearchButton={onClickSearchButton}
        onSignOut={onSignOut}
      />
      <main className="relative z-10 mb-36 min-h-[calc(100vh-32px)] w-full bg-white pt-20">
        <div className=" mx-auto max-w-[1280px]">{children}</div>
      </main>
      <Footer />
    </>
  );
};
