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
        className="relative z-30"
      >
        Touch
      </button>
    </>
  );
};
