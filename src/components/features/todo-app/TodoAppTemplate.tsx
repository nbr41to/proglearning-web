import type { Todo } from '@/models/todo/types';
import type { FC } from 'react';

import { createTodo } from '@/models/todo/apis';
import { Button, Input } from '@mantine/core';
import { useState } from 'react';

type Props = {
  todos: Todo[];
};

export const TodoAppTemplate: FC<Props> = ({ todos }) => {
  const [inputText, setInputText] = useState<string>('');

  const handleCreate = async () => {
    await createTodo({
      title: inputText,
    });
    setInputText('');
  };

  return (
    <div className="w-main mx-auto space-y-4 px-8">
      <h2>Your todo-app</h2>
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
      <Button onClick={handleCreate}>送信</Button>
    </div>
  );
};
