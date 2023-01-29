import { useStaticSWR } from '@/hooks/useStaticSWR';
import { useEffect } from 'react';

/**
 * Loading状態を管理するHook
 * pages層またはTemplates層のみで使用する想定
 */
const useLoading = (isLoading?: boolean): boolean => {
  const { data, mutate } = useStaticSWR<boolean>('/loadingState', false);

  useEffect(() => {
    if (typeof isLoading !== 'boolean') return;
    if (data === isLoading) return;

    mutate(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, mutate]);

  return data || false;
};

export default useLoading;
