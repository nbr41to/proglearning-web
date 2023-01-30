import type { FC } from 'react';

import { LoadingOverlay as MantineLoadingOverlay } from '@mantine/core';

type Props = {
  visible: boolean;
};
export const LoadingOverlay: FC<Props> = ({ visible }) => {
  return (
    <MantineLoadingOverlay
      className="fixed z-50"
      visible={visible}
      overlayBlur={4}
      overlayColor="#ddd"
    />
  );
};
