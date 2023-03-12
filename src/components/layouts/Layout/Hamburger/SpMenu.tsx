import type { FC } from 'react';

import { clsx } from '@mantine/core';
import Link from 'next/link';

type Props = {
  open: boolean;
  id: string;
  setOpen: boolean;
};

export const SpMenu: FC<Props> = ({ open, id, setOpen }) => {
  const handleSpMenu = () => {
    setOpen((reState) => !reState);
  };

  return (
    <div
      className={clsx(
        'transition-[visibility, opacity, overflow-hidden] fixed inset-0 z-40 flex h-screen w-full items-center justify-center bg-gray-100 font-baloo duration-700',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <nav id={id} aria-hidden={!open}>
        <ul className="list-none p-0">
          <li>
            <Link
              href={'/'}
              className="pb-2 text-gray-800 no-underline"
              onClick={() => handleSpMenu()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={'/about'}
              className="pb-2 text-gray-800 no-underline"
              onClick={() => handleSpMenu()}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
