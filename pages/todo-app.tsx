import type { NextPage } from 'next';

import { TodoAppTemplate } from '@/components/features/todo-app/TodoAppTemplate';
import { useGetTodos } from '@/hooks/apiHook/useGetTodos';

const TodoAppPage: NextPage = () => {
  const { data } = useGetTodos();

  return (
    <>
      <TodoAppTemplate data={data} />
    </>
  );
};

export default TodoAppPage;
