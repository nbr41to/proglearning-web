import type { Key, SWRResponse } from 'swr';

import useSWR from 'swr';

/* staticな値の状態管理を使用するためのベースとなるSWRのHook */
export const useStaticSWR = <T>(key: Key, initialData?: T): SWRResponse<T> =>
  useSWR<T>(key, null, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    fallbackData: initialData,
  });
