import type { Status } from '@prisma/client';
import type { User } from '@supabase/supabase-js';
import type { FC, ReactNode } from 'react';

import { Footer } from './Footer';
import { Hamburger } from './Hamburger/Hamburger';
import { SpMenu } from './Hamburger/SpMenu';
import { Header } from './Header';
import { useState } from 'react';

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
  // ハンバーガーメニューの状態監視
  const [open, setOpen] = useState<boolean>(false);

  const handleHamburgerClick = () => {
    setOpen((prevState) => !prevState);
  };

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
      <Footer />
      <Hamburger
        onClick={() => handleHamburgerClick()}
        open={open}
        label="メニューを開きます"
        controls="Menu"
      />
      <SpMenu id="Menu" open={open} setOpen={setOpen} />
    </>
  );
};
