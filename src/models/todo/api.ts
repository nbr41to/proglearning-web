import type { TodoCreateParams, TodoUpdateParams } from '@/models/todo/types';

import axios from 'axios';

/* Todoの作成 */
export const createTodo = async (params: TodoCreateParams) => {
  return axios.post(`/api/v1/todos`, params);
};

/* Todoの更新 */
export const updateTodo = async (params: TodoUpdateParams) => {
  return axios.patch(`/api/v1/todos/${params.id}`, params);
};
