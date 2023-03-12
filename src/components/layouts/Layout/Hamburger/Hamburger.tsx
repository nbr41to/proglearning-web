import type { FC, MouseEventHandler } from 'react';

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  label: string;
  controls: string;
};
export const Hamburger: FC<Props> = ({ open, onClick, label, controls }) => {
  return (
    <>
      <button
        aria-expanded={open}
        onClick={onClick}
        aria-label={label}
        aria-controls={controls}
        className={`invisible fixed bottom-4 right-4 z-50 h-8 w-24 font-baloo transition duration-700 sp:visible ${
          open === true
            ? 'bg-gray-100 text-zinc-800'
            : 'bg-zinc-800 text-gray-100'
        }`}
      >
        {open === false ? 'Menu' : 'Close'}
      </button>
    </>
  );
};
