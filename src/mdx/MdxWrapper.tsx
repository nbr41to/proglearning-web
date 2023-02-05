import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MdxWrapper: FC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style>{`
        li {
          padding: 4px 0;
        }
      `}</style>
    </>
  );
};
