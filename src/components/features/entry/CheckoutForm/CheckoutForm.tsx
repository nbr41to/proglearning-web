import type { FC } from 'react';

import { CreditCardIcon } from '@/components/common/icons';
import { SignboardContainer } from '@/components/common/SignboardContainer/SignboardContainer';
import { Button, Radio } from '@mantine/core';
import { useState } from 'react';

type Plan = 'monthly' | 'yearly';
type Props = {
  onClick: (plan: Plan) => Promise<void>;
};

export const CheckoutForm: FC<Props> = ({ onClick }) => {
  const [selected, setSelected] = useState<Plan>();
  const handleClick = () => {
    if (!selected) return;
    onClick(selected);
  };

  return (
    <SignboardContainer fill>
      <Radio.Group
        className="mx-auto my-8 w-fit"
        label="支払いのプランを選択してください。"
        withAsterisk
        required
        value={selected}
        onChange={(value) => setSelected(value as Plan)}
      >
        <div className="flex gap-4 pt-4">
          <Radio value="monthly" label="¥1,320 / 月" />
          <Radio value="yearly" label="¥14,400 / 年" />
        </div>
      </Radio.Group>
      <div className="my-8 mx-auto w-fit">
        <Button
          leftIcon={<CreditCardIcon size={20} />}
          disabled={!selected}
          onClick={handleClick}
        >
          クレジットカード登録画面へ
        </Button>
      </div>
    </SignboardContainer>
  );
};
