import type { FC } from 'react';

import { CreditCardIcon } from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { Button } from '@mantine/core';

type Props = {
  onClick: () => Promise<void>;
};

export const CheckoutForm: FC<Props> = ({ onClick }) => {
  return (
    <SignboardContainer fill>
      <div className="mx-auto w-fit p-8">
        <Button leftIcon={<CreditCardIcon size={20} />} onClick={onClick}>
          クレジットカードを登録
        </Button>
        <p className="mt-3 text-center text-sm">別のページへ移動します。</p>
      </div>
    </SignboardContainer>
  );
};
