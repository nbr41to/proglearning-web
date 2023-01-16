'use client';
import type { FC, ReactNode } from 'react';

import { Header } from './Header';
import { Navbar } from './Navbar';
import { AppShell } from '@mantine/core';
import { useState } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppShell
      header={<Header isOpen={isOpen} setIsOpen={setIsOpen} />}
      navbar={<Navbar isOpen={isOpen} />}
    >
      <div>{children}</div>
    </AppShell>
  );
};

export default RootLayout;
