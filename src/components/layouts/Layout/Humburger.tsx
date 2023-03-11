import type { FC, MouseEventHandler } from 'react';

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  label: string;
  controls: string;
};
export const Humburger: FC<Props> = ({ open, onClick, label, controls }) => {
  return (
    <>
      <button
        aria-expanded={open}
        onClick={onClick}
        aria-label={label}
        aria-controls={controls}
        className={`aria-expanded:humburgerBase invisible fixed bottom-4 right-4 z-50 h-12 w-36 font-baloo sp:visible ${
          open === true
            ? 'bg-gray-100 text-zinc-800'
            : 'bg-zinc-800 text-gray-100'
        }`}
      >
        {open === true ? 'Touch' : 'Cloce'}
      </button>
    </>
  );
};
