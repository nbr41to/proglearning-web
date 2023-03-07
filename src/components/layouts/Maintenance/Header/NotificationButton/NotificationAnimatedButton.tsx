// @refresh reset https://github.com/rive-app/rive-react/issues/141

import type { FC } from 'react';

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect } from 'react';

type Props = {
  isNotification: boolean;
  onClick: () => void;
};
export const NotificationAnimatedButton: FC<Props> = ({
  isNotification,
  onClick,
}) => {
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
    <div
      className="h-12 w-12 cursor-pointer place-content-center rounded-full p-2 hover:bg-gray-100"
      onClick={onClick}
    >
      <RiveComponent />
    </div>
  );
};
