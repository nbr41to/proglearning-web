import type { NextPage } from 'next';

import { TodoAppTemplate } from '@/components/features/todo-app/TodoAppTemplate';
import { useGetTodos } from '@/hooks/apiHook/useGetTodos';

const TodoAppPage: NextPage = () => {
  const { data: todos } = useGetTodos();

  return (
    <>
      <TodoAppTemplate todos={todos || []} />
    </>
  );
};

export default TodoAppPage;
