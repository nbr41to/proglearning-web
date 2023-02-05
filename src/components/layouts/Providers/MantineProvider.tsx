import type { FC, ReactNode } from 'react';

import { MantineProvider as BaseMantineProvider } from '@mantine/core';

type Props = {
  children: ReactNode;
};

export const MantineProvider: FC<Props> = ({ children }) => {
  return (
    <BaseMantineProvider
      theme={{
        colors: {
          primary: [
            '#9CF5EF',
            '#8BF0E7',
            '#7AEBDF',
            '#69E7D7',
            '#58E2CF',
            '#10E8CF',
            '#0DE3C7',
            '#05DFBF',
            '#00DBB7',
            '#00D7AF',
          ],
          secondary: [
            '#79E2F7',
            '#5ED9EF',
            '#44D0E7',
            '#2AC7DF',
            '#10BFD7',
            '#03B5CF',
            '#56C0FE',
            '#009CC7',
            '#0082BF',
            '#0069B7',
          ],
        },
        // primaryColor: 'primary',
      }}
    >
      {children}
    </BaseMantineProvider>
  );
};
