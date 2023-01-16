import '@/styles/globals.css';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <head />
      <body>
        <h1>App Directory Layout</h1>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
