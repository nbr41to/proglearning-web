import type { FC } from 'react';

import Link from 'next/link';

type Props = {
  open: boolean;
  id: string;
};

export const SpMenu: FC<Props> = ({ open, id }) => {
  return (
    <>
      <div className="aria-unexpanded:humburgerBase none invisible absolute z-40 flex h-screen w-full items-center justify-center bg-gray-100 font-baloo  sp:visible">
        <nav id={id} aria-hidden={!open}>
          <ul className="list-none">
            <li>
              <Link href={'/'} className="text-zinc-800 no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'} className="text-zinc-800 no-underline">
                About
              </Link>
            </li>
            <li>
              <Link href={'/lessons'} className="text-zinc-800 no-underline">
                Lessons
              </Link>
            </li>
            <li>
              <Link href={'/contact'} className="text-zinc-800 no-underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
