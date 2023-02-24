import type { ErrorResponse } from '@/types/error';
import type { AxiosError } from 'axios';

import { showNotification } from '@mantine/notifications';
import axios from 'axios';

/* Axios の Request時の Interceptor */
axios.interceptors.request.use((request) => {
  return request;
});

/* Axios の Response 時の Interceptor */
axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    /**
     * 要認証ページ下における認証失敗
     * - 401 Unauthorized
     */
    if (typeof window !== 'undefined') {
      if (error.response?.status === 401) {
        window.location.href = '/login';

        return;
      }
    }

    /* Axios error */
    if (error.isAxiosError) {
      showNotification({
        title: 'エラーが発生しました',
        message:
          typeof error?.response?.data?.message === 'string'
            ? error.response.data.message
            : '予期せぬエラーが発生しました',
        color: 'red',
      });

      return;
    }

    /* 例外 */
    showNotification({
      title: 'エラーが発生しました',
      message:
        typeof error?.message === 'string'
          ? error.message
          : '予期せぬエラーが発生しました',
      color: 'red',
    });
  }
);

export { axios };
