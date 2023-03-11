import type { FC } from 'react';

import { InformationIcon } from '@/components/common/icons';
import { HoverCard } from '@mantine/core';

type Props = {
  text: string;
};

export const HoverInformation: FC<Props> = ({ text }) => {
  return (
    <HoverCard
      width={280}
      shadow="md"
      position="top-start"
      arrowPosition="center"
    >
      <HoverCard.Target>
        <div className="mb-0.5 grid place-items-center">
          <InformationIcon className="cursor-pointer" size={20} />
        </div>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <div className="text-sm">{text}</div>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
