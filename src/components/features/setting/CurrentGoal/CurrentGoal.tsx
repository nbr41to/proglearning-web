import type { FC } from 'react';

import { PenIcon } from '@/components/common/icons';
import { ActionIcon, Button, Input } from '@mantine/core';
import { useFocusTrap } from '@mantine/hooks';
import { useState } from 'react';

type Props = {
  goal: string | null;
  onSubmit: (param: string) => Promise<void>;
};

export const CurrentGoal: FC<Props> = ({ goal, onSubmit }) => {
  const focusTrapRef = useFocusTrap();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleOnEdit = () => {
    setValue(goal || '');
    setIsEditing(true);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleOnSubmit = () => {
    onSubmit(value);
    setIsEditing(false);
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="mr-2 whitespace-pre font-bold">今月の目標:</div>
      {isEditing ? (
        <div className="flex w-full gap-2" ref={focusTrapRef}>
          <Input
            size="sm"
            className="flex-grow"
            value={value}
            onChange={handleOnChange}
          />
          <Button size="sm" onClick={handleOnSubmit}>
            保存
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsEditing(false)}
          >
            キャンセル
          </Button>
        </div>
      ) : (
        <>
          {goal ? (
            <>
              <div className="text-xl font-bold">「 {goal} 」</div>
              <ActionIcon variant="subtle" radius="xl" onClick={handleOnEdit}>
                <PenIcon size={12} />
              </ActionIcon>
            </>
          ) : (
            <Button size="xs" variant="outline" onClick={handleOnEdit}>
              登録する
            </Button>
          )}
        </>
      )}
    </div>
  );
};
