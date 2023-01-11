import type { FC } from 'react';

import { ColorGoogleIcon } from '@/common/icons';
import { SignboardContainer } from '@/common/SignboardContainer';
import { Button } from '@mantine/core';

type Props = {
  onClick: () => Promise<void>;
};

export const CheckoutForm: FC<Props> = ({ onClick }) => {
  return (
    <SignboardContainer>
      <div className="mx-auto w-fit py-8">
        <Button leftIcon={<ColorGoogleIcon size={20} />} onClick={onClick}>
          クレジットカードを登録
        </Button>
      </div>
    </SignboardContainer>
  );
};
