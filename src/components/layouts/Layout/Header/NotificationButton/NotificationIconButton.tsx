import type { FC } from 'react';

import { BellIcon } from '@/components/common/icons';

type Props = {
  isNotification: boolean;
  onClick: () => void;
};
export const NotificationIconButton: FC<Props> = ({
  isNotification,
  onClick,
}) => {
  return (
    <div
      className="relative grid h-10 w-10 cursor-pointer place-content-center rounded-full p-2 hover:bg-gray-100"
      onClick={onClick}
    >
      {isNotification && (
        <div className="absolute top-1.5 right-2 h-3 w-3 rounded-full border border-solid border-white bg-red-500 text-[10px] text-white" />
      )}
      <BellIcon size={24} />
    </div>
  );
};
