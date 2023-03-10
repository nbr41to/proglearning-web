// @refresh reset https://github.com/rive-app/rive-react/issues/141

import type { FC } from 'react';

import { Popover } from '@mantine/core';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

type Props = {
  isNotification: boolean;
};
export const NotificationAnimatedButton: FC<Props> = ({ isNotification }) => {
  const { rive, RiveComponent } = useRive({
    src: '/rive/bell-notification.riv',
    stateMachines: 'State Machine',
    autoplay: true,
  });
  const hasNotificationsInput = useStateMachineInput(
    rive,
    'State Machine',
    'hasNotifications'
  );

  useEffect(() => {
    if (!hasNotificationsInput) return;
    hasNotificationsInput.value = isNotification;
  }, [isNotification, hasNotificationsInput]);

  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <div className="h-12 w-12 cursor-pointer place-content-center rounded-full p-2 hover:bg-gray-100">
          <RiveComponent />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <div className="grid min-h-[100px] place-content-center text-sm">
          通知はありません。
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
