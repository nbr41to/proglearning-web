import type { FC, ReactNode } from 'react';

import { Button, clsx, Modal } from '@mantine/core';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  children: ReactNode;
  isOverlay?: boolean;
  isLogin?: boolean;
};

export const LoginCheckWrapper: FC<Props> = ({
  children,
  isOverlay = false,
  isLogin = false,
}) => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="relative h-fit w-fit">
        {!isLogin && (
          <div
            className={clsx(
              'absolute z-10 -m-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] cursor-pointer',
              isOverlay &&
                'grid place-content-center rounded bg-gray-800 font-bold text-white opacity-70'
            )}
            onClick={() => setOpened(true)}
          >
            {isOverlay && 'Sign up and open'}
          </div>
        )}
        {children}
      </div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="この機能は使用できません"
      >
        <div>この機能を使用するには登録する必要があります🥺</div>
        <div className="mt-4 flex justify-center gap-4">
          <Button
            onClick={() => {
              router.push('/entry');
              setOpened(false);
            }}
          >
            登録する
          </Button>
          <Button variant="outline" onClick={() => setOpened(false)}>
            閉じる
          </Button>
        </div>
      </Modal>
    </>
  );
};
