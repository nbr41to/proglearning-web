import type {
  MyLessonCreateParams,
  MyLessonUpdateParams,
} from '@/models/myLesson/types';

import axios from 'axios';

/**
 * Lessonの取得
 */
export const getLesson = async (lessonId: string) => {
  return axios.get(`/api/v1/lessons/${lessonId}`);
};

/**
 * Lessonの作成
 */
export const createLesson = async (params: MyLessonCreateParams) => {
  return axios.post('/api/v1/lessons', params);
};

/**
 * Lessonの更新
 */
export const updateLesson = async (params: MyLessonUpdateParams) => {
  return axios.patch(`/api/v1/lessons/${params.id}`, params);
};
